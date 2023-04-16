// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
require("./InfoCard.css")

function InfoCard() {
  return (
   
    <div class = "info">
        <p class = "about">Make a mathematical discovery today!</p>
        <p class = "description">
            Have you ever wanted to make a mathematical discovery to rival Einsteins Theory of Relativity? Well here is your chance. 
            All you have to do is think of a number SO large that there is no way anyone in history has every thought of it. Sounds easy right?
            <div class = "gif"></div>
        </p>
    </div>
  );
}

export default InfoCard;