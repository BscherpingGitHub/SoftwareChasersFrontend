import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
require("./InputBox.css")

function InputBox() {
  return (

    
    <div class = "inputWrapper">
        <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
            <Form.Control type="text" placeholder="First" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Last Name" width = "">
            <Form.Control type="text" placeholder="Last"/>
        </FloatingLabel>
    </div>
    
  );
}

export default InputBox;