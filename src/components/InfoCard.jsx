// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
require("./InfoCard.css");

function InfoCard() {
  return (
    <div className="info">
      <p className="about">Make a mathematical discovery today!</p>
      <p className="description">
        Have you ever wanted to make a mathematical discovery to rival Einsteins
        Theory of Relativity? Well here is your chance. All you have to do is
        think of a number SO large that there is no way anyone in history has
        every thought of it. Sounds easy right?
        
      </p>
      <div className="gif"></div>
    </div>
  );
}

export default InfoCard;
