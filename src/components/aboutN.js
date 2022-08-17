import React from 'react';
import Image from 'react-bootstrap/Image';
import "../styles/responsive.css";
import {Link} from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Figure from 'react-bootstrap/Figure';
import "../styles/jquery";

import Image0 from "../images/Coder.png";

import Image1 from "../images/skills/1.png";
import Image2 from "../images/skills/2.png";
import Image3 from "../images/skills/3.png";
import Image4 from "../images/skills/4.png";
import Image5 from "../images/skills/5.png";
import Image6 from "../images/skills/6.png";
import Image7 from "../images/skills/7.png";
import Image8 from "../images/skills/8.png";
import Image9 from "../images/skills/9.png";
import Image10 from "../images/skills/10.png";
import Image11 from "../images/skills/11.png";
import Image12 from "../images/skills/12.png";
import Image13 from "../images/skills/13.png";
import Image14 from "../images/skills/14.png";
import Image15 from "../images/skills/15.png";
import Image16 from "../images/skills/16.png";
import Image17 from "../images/skills/17.png";
import Image18 from "../images/skills/18.png";
import Image19 from "../images/skills/19.png";
import Image20 from "../images/skills/20.png";
import Image21 from "../images/skills/21.png";
import Image22 from "../images/skills/22.png";
import Image23 from "../images/skills/23.png";
import Image24 from "../images/skills/24.png";


class AboutN extends React.Component{
    render() {
        return (
          <div id="tr" className="container">
            <br/>
                <Link to="/homeN" className="btn btn-light">{<KeyboardBackspaceIcon />} &nbsp;Precedent</Link>
                <br/>
                <br/>
                <br/>
                <br/>
                <p id="who"><h1 style={{'text-decoration':"underline",'font-family':'Rockwell',"margin-top":"15px"}}>Know who <span style={{'font-family':'Rockwell Extra Bold','color':"Green"}}>I am</span> </h1>
                </p>
                <Image id="profil"
                    
                    src={Image0}/>
                <br/>
                <p style={{'font-family':'papyrus', 'font-size':'x-large'}}>
            Graduated with a DEC in Commerce, Negotiation,
marketing, management, finance and logistics
 at the French School of Business, this training and my
 two internships allowed me to develop my skills in this field, but I have always been interested in IT, which prompted me to enroll in a DEC in IT management at the Teccart Institute. This training, which began in
2019 gave me the programming skills
 that I was looking for and to confirm my desire to be
in the digital domain. Passionate, creative and dynamic, I am currently looking for a job in programming.
 </p>
 <br/>
    <p style={{'font-family':'papyrus', 'font-size':'x-large'}}>
    
            My 3 qualities are:
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<ArrowRightIcon />} I learn fast.
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<ArrowRightIcon />} I try to be the best in everything I do.
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<ArrowRightIcon />} I observe well.
            </p>
            <br/>
            <br/>
            <p><h5 style={{'text-align':"center",'font-family':'MV Boli',"margin-top":"15px",'letter-spacing': '6px', 'word-spacing': '10px'}}> "Whatever I do, I always want to get better!"</h5>
     </p>

     <br/>
            <br/>
            <p><h1 style={{'text-decoration':"underline",'text-align':"center",'font-family':'Rockwell'}}> Professional <span style={{'font-family':'Rockwell Extra Bold','color':"Green"}}>Skillset</span></h1>
     </p>

     <Figure>
      <Figure.Image
        id="html"
        alt="HTML"
        src={Image1}
        
      />
    </Figure>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Figure>
      <Figure.Image
        id="css"
        alt="css"
        src={Image2}
        
      />
    </Figure>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Figure>
      <Figure.Image
        id="js"
        alt="js"
        src={Image3}
        
      />
    </Figure>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Figure>
      <Figure.Image
        id="jq"
        alt="jq"
        src={Image4}
        
      />
    </Figure>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Figure>
      <Figure.Image
        id="bootstrap"
        alt="bootstrap"
        src={Image5}
        
      />
    </Figure>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <br/>

    <Figure>
      <Figure.Image
        id="node"
        alt="node"
        src={Image6}
        
      />
    </Figure>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Figure>
      <Figure.Image
        id="php"
        alt="php"
        src={Image7}
        
      />
    </Figure>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Figure>
      <Figure.Image
        id="asp"
        alt="asp"
        src={Image8}
        
      />
    </Figure>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Figure>
      <Figure.Image
        id="react"
        alt="react"
        src={Image9}
        
      />
    </Figure>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Figure>
      <Figure.Image
        id="angular"
        alt="angular"
        src={Image10}
        
      />
    </Figure>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <br/> <Figure>
      <Figure.Image
        id="c"
        alt="c#"
        src={Image11}
        
      />
    </Figure>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Figure>
      <Figure.Image
        id="mysql"
        alt="mysql"
        src={Image12}
        
      />
    </Figure>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Figure>
      <Figure.Image
        id="oracle"
        alt="oracle"
        src={Image13}
        
      />
    </Figure>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Figure>
      <Figure.Image
        id="sql"
        alt="sql"
        src={Image14}
        
      />
    </Figure>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Figure>
      <Figure.Image
        id="mongo"
        alt="mongo"
        src={Image15}
        
      />
    </Figure>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <br/>
    <div id="push">
    <Figure>
      <Figure.Image
       
        id="python"
        alt="python"
        src={Image16}
        
      />
    </Figure>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <Figure>
      <Figure.Image
        id="java"
        alt="java"
        src={Image17}
        
      />
    </Figure>
    </div>
    <br/>
            <br/>
            <p  style={{'text-decoration':"underline",'font-size':'xx-large'}}><h1 style={{'text-align':"center",'font-family':'Rockwell Extra Bold','color':"Green"}}>Tools <span style={{'font-family':'Rockwell','color':'black'}}>I use</span></h1>
     </p>

     <Figure id="fline">
      <Figure.Image
        id="git"
        alt="Git"
        src={Image18}
        
      />
      </Figure>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <Figure>
      <Figure.Image
        id="visual"
        alt="visual"
        src={Image19}
        
      />
    </Figure>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <Figure>
      <Figure.Image
        id="studio"
        alt="studio"
        src={Image20}
        
      />
    </Figure>
    <br/>
    <Figure id="sline">
      <Figure.Image
        id="postman"
        alt="postman"
        src={Image21}
        
      />
      </Figure>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <Figure>
      <Figure.Image
        id="pycharm"
        alt="pycharm"
        src={Image22}
        
      />
    </Figure>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <Figure>
      <Figure.Image
        id="android"
        alt="android"
        src={Image23}
        
      />
    </Figure>
    <br/>
    <Figure id="tline">
      <Figure.Image
        id="xampp"
        alt="xampp"
        src={Image24}
        
      />
      </Figure>
 
          </div>
        );
      }
    }
export default AboutN;