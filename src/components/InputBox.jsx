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
import { saveAs } from 'file-saver';
import superagent from 'superagent'
// import axios from "axios";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
require("./InputBox.css");

const InputBox = () => {

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 500));
  }

  const [showPDF, setShowPDF] = useState(false);
  const [url, setUrl] = useState(null);
  const [blob, setBlob] = useState(null);

  var first;
  var last;
  var number;

  // await SuperAgent
  //           .post('http://ec2-3-129-19-122.us-east-2.compute.amazonaws.com:5000/datasender')
  //           .send({"firstName": first,
  //                   "lastName": last,
  //                   "number": number})
  //           .set('X-API-Key', 'foobar')
  //           .set('Accept', 'application/json')
  //           .then(res => {
  //               console.log(JSON.stringify(res.body))
  //           })  

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
      console.log(document.getElementById("firstName").value);
      console.log(document.getElementById("lastName").value);
      console.log(document.getElementById("number").value);
      first = document.getElementById("firstName").value;
      last = document.getElementById("lastName").value;
      number = document.getElementById("number").value;

      if(number.length < 1){
        window.alert("Number not large enough, please try again!");
        document.getElementById("number").value = "";
      
        
      }else{

        generatePDF();

        await superagent
            .get(`http://acc5c208dae842ed3.awsglobalaccelerator.com:5000/check_data/${first}/${last}/${number}`) //http://ec2-3-129-19-122.us-east-2.compute.amazonaws.com:5000/check_data/${first}/${last}/${number}
            // https://pokeapi.co/api/v2/pokemon/ditto
            // http://127.0.0.1:5000/check_data/fname/lname/number
            // .send({"fname": first,
            //         "lname": last,
            //         "number": number})
            .set('X-API-Key', 'foobar')
            .set('Accept', 'application/json')
            .then(res => {
                console.log(JSON.stringify(res.body))
            }).catch(err => console.log(err))

      }
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
        // blob = blob.slice(0, blob.size, "image/png")
        // setBlob(blob);
        // console.log(blob)

      });
      
    setShowPDF(true);
  }

//   const downloadImg = () => {
//     blobToDataURL(blob, (dataUrl) => {
//       console.log(dataUrl);
//     });
//   }

//   const blobToDataURL = (blob, callback) => {
//     var a = new FileReader();
//     a.onload = (e) => {callback(e.target.result);}
//     a.readAsDataURL(blob);
//     console.log(a);

//     const b = document.createElement('a');

//     b.setAttribute('download', 'reactflow.png');
//     b.setAttribute('href', dataUrl);
//     b.click();
//     // saveAs(a, "image.pdf");

// }
// var canvasUrl;

// const createCanvas = () => {
  
//   const canvas = document.createElement("canvas");
//   const ctx = canvas.getContext("2d");
//   ctx.fillStyle = "#FF0000";
//   const img = new Image();

//   canvas.width = 1000;
//   canvas.height = 750;

//   img.src = "certificate.png";

//   img.onLoad = () => {
//     ctx.drawImage(img,  0, 0, 500, 500);
//   }

//   ctx.fill();
//   canvasUrl = canvas.toDataURL("image/png");
//   console.log(canvasUrl)
//   const link = document.createElement('a');

//   link.download = "canvas.png";

//   link.href = canvasUrl;

//   // link.click();
// }

  return (
    <div>
    {showPDF ? 
      <div className="pdfWrapper">
        <a href={'' + url} target="_blank" rel="noreferrer">Generate Personalized PDF Certification</a>
        <br></br>
        <a href="/generic-certificate.jpg" download>Generate Generic JPG Certification</a>
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
