import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
require("./AboutCard.css");

function AboutCard() {
  return (
    <div className="aboutDiv">
      <p className="explanation">
      A number which has never been thought of. 
      How hard can that be? Should be easy, right?. 
      It may surprise you how big the number will have to be. 
      We are looking for a number with a 99% probability of never being thought of.
      If you are able to think of such a number, enter it into the submission box below. 
      If you succeed, you will be rewarded. If not don't worry, just try again!
      </p>
      <div className="arrowWrapper">
        <br/><br/>
        <p className="arrowText">
          If you would like a more in depth explanation then watch this video by
          Numberphile, or click the help button!
        </p>
        <a href="/Help"><Button
          variant="primary"
          style={{ float: "right", marginTop: "5px", height: "54px", width: "125px" }}
          >
          Help
          </Button>
      </a>
        {/* <img src="images/leftarrow.png" alt="arrow" class = "arrow"/> */} 
      </div>
    </div>
  );
}

export default AboutCard;
