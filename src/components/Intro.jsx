import introPic from '../images/intro-img.jpeg'

export default function Intro() {
    return (
        <div className="intro-section">
      <div className="intro-img-wrapper">
      <img alt="" src={introPic} />
      </div>
      <div className="intro-text-wrapper">
      <p>Hi! my name is Oren and i like travelling and talking about my self :P </p>
      <p>So this page will combine my two desires and i'll share with you some of travels which i prefer to see as a way of living :)</p>
      </div>
      
      </div>
     
    );
  }