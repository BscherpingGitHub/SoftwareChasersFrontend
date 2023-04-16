
import 'bootstrap/dist/css/bootstrap.min.css';
require("./AboutCard.css")

function AboutCard() {
  return (
    <div class = "aboutDiv">
        <p class = "explanation">Some informational text about how this whole thing worksSome informational text about how this whole thing worksSome informational 
        text about how this whole thing worksSome informational text about how this whole thing worksSome informational text about how this whole thing worksSome informational 
        text about how this whole thing worksSome informational text about how this whole thing works
        </p>
        <div class = "arrowWrapper"><p class = "arrowText">If you would like a more in depth explanation then watch this video by Numberphile!</p>
          <div class = "arrow"></div>
        </div>
    </div>
  );
}

export default AboutCard;