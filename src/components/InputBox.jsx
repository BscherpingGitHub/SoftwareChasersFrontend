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
import Decimal from "decimal.js";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
require("./InputBox.css");

const InputBox = () => {

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 500));
  }

  const [showPDF, setShowPDF] = useState(false);
  const [url, setUrl] = useState(null);
  const [blob, setBlob] = useState(null);
  const [numErr, setNumErr] = useState(null);
  const [number, setNumber] = useState();
  const [chance, setChance] = useState();

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
      // console.log(document.getElementById("firstName").value);
      // console.log(document.getElementById("lastName").value);
      // console.log(document.getElementById("number").value);
      first = document.getElementById("firstName").value;
      last = document.getElementById("lastName").value;
      setNumber(document.getElementById("number").value);

      var tempNum = document.getElementById("number").value

      var percent = new Decimal(((1 - (document.getElementById("number").value ** (-0.3)))))

      //(((1 - (number ** (-0.3))) ** (1.5 * (10 ** 18))))

      // percent.toFixed(5);

      console.log(percent);
      
      setChance(percent);

      if(tempNum.length < 67){
        setNumErr(true);
      }else{
        generatePDF();
        
      }

        // await superagent
        //     .get(`http://acc5c208dae842ed3.awsglobalaccelerator.com:5000/check_data/${first}/${last}/${number}`)
        //     // https://pokeapi.co/api/v2/pokemon/ditto
        //     // http://127.0.0.1:5000/check_data/fname/lname/number
        //     // .send({"fname": first,
        //     //         "lname": last,
        //     //         "number": number})
        //     .set('X-API-Key', 'foobar')
        //     .set('Accept', 'application/json')
        //     .then(res => {
        //         console.log(JSON.stringify(res.body))
        //     }).catch(err => console.log(err))
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
        },
        {
            text: number,
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

const showError = () => {

  
}

// var chance = (((1 - (number ** -0.3)) ** (1.5* (10 ** 18))) * 100)

    return (
    
    <div>
    {
    showPDF ? 
      <div className="pdfWrapper">
        <a href={'' + url} target="_blank" rel="noreferrer">Generate Personalized PDF Certification</a>
        <br></br>
        <a href="/generic-certificate.jpg" download>Generate Generic JPG Certification</a>
      </div>
    :
    numErr ? 
    <div className="inputWrapper">
      <p className="readyText">You picked the number {number} was determined to have a {chance}% chance of being thought of. 
        This was calculated by the equations on the help page. </p>
        <Button
        variant="primary"
        style={{ float: "right", marginTop: "10px", height: "54px", width: "125px" }}
        // onClick={}
      >
        Help
      </Button>
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
