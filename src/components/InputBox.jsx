import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import dataUrl from "./dataUrlVar";
import superagent from 'superagent'
pdfMake.vfs = pdfFonts.pdfMake.vfs;
require("./InputBox.css");

const InputBox = () => {

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 500));
  }

  const [showPDF, setShowPDF] = useState(false);
  const [url, setUrl] = useState(null);
  const [numErr, setNumErr] = useState(null);
  const [number, setNumber] = useState();
  const [chance, setChance] = useState();
  const [numExist, setNumExist] = useState(false);

  var first;
  var last;
  // var number;

  const LoadingButton = () => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);

    const handleClick = async () => {
      setLoading(true);
      first = document.getElementById("firstName").value;
      last = document.getElementById("lastName").value;
      setNumber(document.getElementById("number").value);

      var tempNum = document.getElementById("number").value

      if(tempNum.length <= 30){
        setChance(0);
      }else if(tempNum.length <= 35){
        setChance(1);
      }else if(tempNum.length <= 40){
        setChance(15);
      }else if(tempNum.length <= 45){
        setChance(45);
      }else if(tempNum.length <= 50){
        setChance(76);
      }else if(tempNum.length <= 60){
        setChance(94);
      }

      if(tempNum.length < 67){
        setNumErr(true);
      }else{
        generatePDF();
      }

        await superagent
            .get(`http://18.221.55.184:5000/?fname=${first}&lname=${last}&number=${tempNum}`)
            .set('X-API-Key', 'foobar')
            .set('Accept', 'application/json')
            .then(res => {  
              console.log(JSON.stringify(res.body.error))
              if(JSON.stringify(res.body.error) === "-1"){
                setNumExist(true);
              }
            }).catch(err => console.log(err))
    }

    return (
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        style={{ float: "right", marginTop: "10px", height: "54px", width: "125px" }}
      >
        {isLoading ? "Loading…" : "Submit"}
      </Button>
    );
  }

  const generatePDF = () => {

    var tempNumber = document.getElementById("number").value
    
    var dd = {
  
      pageOrientation: "landscape",
      pageMargins: [20, 10, 130, 20],
      pageSize: "LETTER",
    
      background: [
        {
            image: dataUrl,
            width: 792
        }
      ],

      content: [
        {
            text: first + " " + last,
            absolutePosition: {x: 300, y:290},
            noWrap: false
        },
        {
            text: tempNumber,
            absolutePosition: {x: 160, y: 340},
        },   
    ]  
    }
    
    const pdf = pdfMake.createPdf(dd);

    pdf.getBlob((blob) => {
        const tempUrl = URL.createObjectURL(blob);
        console.log(tempUrl);
        setUrl(tempUrl);
      });
    
    setShowPDF(true);
  }

    return (
    
    <div>
    {
    numExist ? 
    <div className="pdfWrapper">
    <p className="readyText">
      It looks like someone has already thought of that number before! Please try again.
    </p>
    <Button
        variant="primary"
        style={{ float: "right", marginTop: "40px", height: "54px", width: "125px", marginRight: "5px"}}
        onClick={() => {setShowPDF(false); setNumErr(false); setNumExist(false)}}
      >
        Try again
      </Button>
  </div>
    :
    showPDF ? 
      <div className="pdfWrapper">
        <p className="readyText">Congratulations! The number you chose has a 99% chance of never being thought of. 
        Claim your certification below. 
        You can choose from a custom 67Zeros certificate or a generic certificate.</p>
        <a href={'' + url} target="_blank" rel="noreferrer">Generate Personalized PDF Certification</a>
        <br></br>
        <a href="generic-certificate.jpg" download>Generate Generic JPG Certification</a>
        <Button
        variant="primary"
        style={{ float: "right", marginBottom: "20px", height: "40px", width: "125px", marginRight: "20px"}}
        onClick={() => {setShowPDF(false); setNumErr(false)}}
      >
        Reset
      </Button>
      </div>
    :
    numErr ? 
    <div className="inputWrapper">
      <p className="readyText">The number {number} has a {chance}% chance of NEVER being thought of. 
        This was calculated by the equations on the help page. </p>
        <a href="#Hpage">
          <Button
        variant="primary"
        style={{ float: "right", marginTop: "10px", height: "54px", width: "125px" }}
      >
        Help
      </Button>
      </a>
      <Button
        variant="primary"
        style={{ float: "right", marginTop: "10px", height: "54px", width: "125px", marginRight: "5px"}}
        onClick={() => {setShowPDF(false); setNumErr(false)}}
      >
        Try again
      </Button>
    </div>
      :
    <div className ="inputWrapper">
      <Row className="g-2">
        <p className ="readyText">Ready?</p>
        <Col xs={2}>
          <FloatingLabel
            label="First Name"
          >
            <Form.Control type="form-text" id = "firstName" />  
          </FloatingLabel> 
        </Col>
        <Col xs={2}>
          <FloatingLabel
            label="Last Name"
          >
            <Form.Control type="form-text" id = "lastName"/>
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="g-2">
        <Col xs={11}>
          <FloatingLabel
            label="Your Number (Hint: This box is very long for a reason!)"
          >
            <Form.Control type="form-text" id = "number" />
          </FloatingLabel>
        </Col>
        <LoadingButton />
      </Row>
    </div>
    }
    </div>
  );
  
}

export default InputBox;
