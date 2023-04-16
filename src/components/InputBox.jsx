import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
require("./InputBox.css")

function InputBox() {
    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 500));
      }
      
      function LoadingButton() {
        const [isLoading, setLoading] = useState(false);
      
        useEffect(() => {
          if (isLoading) {
            simulateNetworkRequest().then(() => {
              setLoading(false);
            });
          }
        }, [isLoading]);
      
        const handleClick = () => setLoading(true);
      
        return (
          <Button
            variant="primary"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
            style={{float: "right", marginTop: "10px"}}
          >
            {isLoading ? 'Loading…' : 'Click to load'}
          </Button>
        );
      }



  return (
    
    
    <div class = "inputWrapper">
        <Row className="g-2">
        <p class = "readyText">Are you ready to claim your number?</p>
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Please enter your name" style = {{width : "500px", margin: "2px"}}>
          <Form.Control type="text"/>
        </FloatingLabel>
      </Col>
    </Row>
    <Row className="g-2">
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Your Number (Hint: This box is very long for a reason!)" style={{margin: "2px", width: "185%"}}>
          <Form.Control type="text"/>
        </FloatingLabel>
      </Col>
      <Col md>
      <LoadingButton/>
      </Col>
      
    </Row>
    
    
    </div>
    
  );
}

export default InputBox;