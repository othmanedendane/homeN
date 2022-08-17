import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'react-bootstrap/Carousel';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';
import "../styles/responsive.css";
import "../styles/jquery";
import "../styles/footer.css";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


import Image1 from "../images/1.jpeg";
import Image2 from "../images/2.jpeg";
import Image3 from "../images/3.jpeg";
import Image4 from "../images/4.jpeg";
import Image5 from "../images/5.jpeg";
import Image6 from "../images/6.jpeg";
import Image7 from "../images/7.jpeg";
import Image8 from "../images/8.jpeg";
import Image9 from "../images/9.jpeg";
import Image from "../images/arcade2.png";
import Joy from "../images/joyboy.png";


class ArcadeN extends React.Component{
    render() {
        return (
          <div className="container">
           <br/>
                <Link to="/projectsN" className="btn btn-light">{<KeyboardBackspaceIcon />} &nbsp;Precedent</Link>
                <br/>
                <br/>
                <br/>
                <br/>
                <p><h1 style={{'text-decoration':"underline",'text-align':"center",'font-family':'Rockwell',"margin-top":"15px"}}>My arcade <span style={{'font-family':'Rockwell Extra Bold','color':"Green"}}>(RaspberryPie)</span> </h1>
                <h3 style={{'text-align':"center",'font-family':'Lucida Sans Typewriter',"margin-top":"15px"}}>Part 1 :<img id="joy" src={Joy}/></h3></p>
              
             <Carousel id="car">
            <Carousel.Item style={{'height':"500px"}}>
              <img
                className="d-block w-100"
                style={{'height':"500px"}}
                src={Image1}
                alt="First slide"
              />
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':"500px"}}>
              <img
                className="d-block w-100"
                style={{'height':"500px"}}
                src={Image2}
                alt="Third slide"
              />
          
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':"500px"}}>
              <img
                className="d-block w-100"
                style={{'height':"500px"}}
                src={Image3}
                alt="Third slide"
              />
          
              <Carousel.Caption>
              
              </Carousel.Caption>
            </Carousel.Item>
          
            

          <Carousel.Item style={{'height':"500px"}}>
              <img
                className="d-block w-100"
                style={{'height':"500px"}}
                src={Image4}
                alt="First slide"
              />
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item style={{'height':"500px"}}>
              <img
                className="d-block w-100"
                style={{'height':"500px"}}
                src={Image5}
                alt="First slide"
              />
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height':"500px"}}>
              <img
                className="d-block w-100"
                style={{'height':"500px"}}
                src={Image6}
                alt="First slide"
              />
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height':"500px"}}>
              <img
                className="d-block w-100"
                style={{'height':"500px"}}
                src={Image7}
                alt="First slide"
              />
              <Carousel.Caption>
               
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height':"500px"}}>
              <img
                className="d-block w-100"
                style={{'height':"500px"}}
                src={Image8}
                alt="First slide"
              />
              <Carousel.Caption>
               
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height':"500px"}}>
              <img
                className="d-block w-100"
                style={{'height':"500px"}}
                src={Image9}
                alt="First slide"
              />
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            <p id="haut">
            <h1 style={{'text-decoration':"underline",'text-align':"center",'font-family':'Lucida Sans Typewriter'}}>Part 2 :</h1>
            <h4 style={{'text-align':"center",'font-family':'Lucida Sans Typewriter'}}>Upgrade in the next step the cardboard to a real arcade (software already functional)</h4>
            </p>
            <br/>
            <img
                className="d-block w-100"
                id="inchaalah"
                src={Image}
                alt="Creation"
              />
              <p><h5 style={{'text-align':"center",'font-family':'MV Boli',"margin-top":"15px",'letter-spacing': '6px', 'word-spacing': '10px','font-size':'x-large'}}> [In development!]</h5></p>

          </div>
         
        );
        
      }
      
    }
export default ArcadeN;