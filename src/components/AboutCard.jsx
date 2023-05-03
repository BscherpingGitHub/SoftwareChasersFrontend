import "bootstrap/dist/css/bootstrap.min.css";
require("./AboutCard.css");

function AboutCard() {
  return (
    <div className="aboutDiv">
      <p className="explanation">
        Some informational text about how this whole thing worksSome
        informational text about how this whole thing worksSome informational
        text about how this whole thing worksSome informational text about how
        this whole thing worksSome informational text about how this whole thing
        worksSome informational text about how this whole thing worksSome
        informational text about how this whole thing works
      </p>
      <div className="arrowWrapper">
        <br></br>
        <p className="arrowText">
          If you would like a more in depth explanation then watch this video by
          Numberphile!
        </p>
        <img src="leftarrow.png" alt="arrow" class = "arrow"/>
      </div>
    </div>
  );
}

export default AboutCard;
