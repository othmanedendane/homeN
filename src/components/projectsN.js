import React from 'react';
//import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import Typography from '@mui/material/Typography';
//import { Button, CardActionArea, CardActions } from '@mui/material';
import {Link} from 'react-router-dom';
import "../styles/responsive.css";
import "../styles/jquery";
import "../styles/footer.css";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Image1 from "../images/zoo.PNG";
import Image2 from "../images/strong.PNG";
import Image3 from "../images/Keridix.PNG";
import Image4 from "../images/fria.png";
import Image5 from "../images/e_lear.png";
import Image6 from "../images/arcade.jpeg";
import Image7 from "../images/ikeaa.png";
import Image8 from "../images/desktop.PNG";
import Image9 from "../images/Bash.PNG";
import Image10 from "../images/plat.PNG";
import Image11 from "../images/escape.PNG";
import Image12 from "../images/bouffe.PNG";
import Image13 from "../images/stagen.png";
import Image14 from "../images/mobile.png";
import Image15 from "../images/face.jpeg";



class ProjectsN extends React.Component{
    render() {
        return (
            <div>
                <br/>
                <Link to="/homeN" className="btn btn-light">{<KeyboardBackspaceIcon />} &nbsp;Precedent</Link>
                <br/>
                <br/>
                <br/>
                <br/>
                <p><h1 style={{'text-decoration':"underline",'text-align':"center",'font-family':'Rockwell',"margin-top":"15px"}}>My Recent <span style={{'font-family':'Rockwell Extra Bold','color':"Green"}}>Projects</span> </h1>
                <h3 style={{'text-align':"center",'font-family':'Lucida Sans Typewriter',"margin-top":"15px"}}>Here are a few projects I've worked on recently.</h3></p>
              




            <span style={{display: 'flex', 'margin-top':'50px', flexDirection: 'row'}} >
            
            <div id="card1" class="card" >
            <img class="card-img-top" id="imcard1" src={Image2} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title" style={{'text-decoration':"underline"}}>Strong</h5>
              <p class="card-text">A website that gives beginners on working out all the knowledge they should know (in developpement...) </p>
              <div id="liengit">
              
              </div>
            </div>
            </div>
            &nbsp;&nbsp;&nbsp;
  
  
  
          <div id="card2" class="card">
          <img class="card-img-top" id="imgcard2" src={Image3} alt="Card image cap"/>
              <div class="card-body">
                  
              <h5 class="card-title" style={{'text-decoration':"underline",'margin-top':"10px"}}>Keridix</h5>
              <p class="card-text">Full stack website with 2 sides:
              -employers and workers</p>
              <a  href="https://github.com/othmanedendane/MERN-Keridix" className="btn btn-outline-success" title="Github">More <i class="fa fa-github"></i></a>
              &nbsp;&nbsp;&nbsp;
              <a id="ytb1" href=" https://www.youtube.com/watch?v=eJNlutUKiOI" className="btn btn-outline-danger" title="Youtube">Demo <i class="fa fa-youtube"></i></a>
              </div>
        </div>

        &nbsp;&nbsp;&nbsp;

        <div id="card3" class="card">
          <img class="card-img-top" id="imcard3" src={Image4} alt="Card image cap"/>
              <div class="card-body">
                  
              <h5 class="card-title" style={{'text-decoration':"underline",'margin-top':"10px"}}>Les belles friandises</h5>
              <p class="card-text">A full stack MEAN website (Crud)</p>
              <a  href="https://github.com/othmanedendane/MEAN-Les_belles_friandises" className="btn btn-outline-success" title="Github">More <i class="fa fa-github"></i></a>
              </div>
        </div>
  
            
  
      
    </span>
    <br/>
    
    <span style={{display: 'flex', 'margin-top':'0px', flexDirection: 'row'}} >
            
            <div id="card4" class="card" style={{'width':"10rem",'height':"425px", flex: '1'}}>
            <img class="card-img-top" style={{'height':"215px", flex: '1'}} src={Image5} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title" style={{'text-decoration':"underline"}}>E-Learning</h5>
              <p class="card-text">asp MVC programming e_learning site</p>
              
              <a  href="https://github.com/othmanedendane/E_Learning-ASP_MVC" className="btn btn-outline-success" title="Github">More <i class="fa fa-github"></i></a>
            </div>
            </div>
            &nbsp;&nbsp;&nbsp;
  
  
  
          <div id="card5" class="card" style={{'width':"10rem",'height':"425px", flex: '1'}}>
          <img class="card-img-top" style={{'height':"215px", flex: '1'}} src={Image6} alt="Card image cap"/>
              <div class="card-body">
                  
              <h5 class="card-title" style={{'text-decoration':"underline",'margin-top':"10px"}}>ARCADE</h5>
              <p class="card-text">One of the best projects I've done, I transformed a box into a great arcade using a RaspberryPie</p>
              
              <Link to="/arcadeN" className="btn btn-outline-success"> Details {<SportsEsportsIcon/>}</Link>
              </div>
        </div>

        &nbsp;&nbsp;&nbsp;

        <div id="card6" class="card" style={{'width':"10rem",'height':"425px", flex: '1'}}>
          <img class="card-img-top" style={{'height':"215px", flex: '1'}} src={Image7} alt="Card image cap"/>
              <div class="card-body">
                  
              <h5 class="card-title" style={{'text-decoration':"underline",'margin-top':"10px"}}>IkeaWannaBe</h5>
              <p class="card-text">Php-MVC: Store with CRUD Admin Management, Client Side Product Display (Read) </p>
              <a  href="https://github.com/othmanedendane/Php-MVC_magasin_de_meubles" className="btn btn-outline-success" title="Github">More <i class="fa fa-github"></i></a>
              </div>
        </div>
  
      
    </span>
   

    <span style={{display: 'flex', 'margin-top':'25px', flexDirection: 'row'}} >
            
            <div id="card7" class="card" style={{'width':"10rem",'height':"425px", flex: '1'}}>
            <img class="card-img-top" style={{'height':"215px", flex: '1'}} src={Image8} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title" style={{'text-decoration':"underline"}}>Hairdresser</h5>
              <p class="card-text">Desktop application for hairdresser in C#</p>
              
              <a  href="https://github.com/othmanedendane/C-sharp_desktop" className="btn btn-outline-success" title="Github">More <i class="fa fa-github"></i></a>
            </div>
            </div>
            &nbsp;&nbsp;&nbsp;
  
  
  
          <div id="card8" class="card" style={{'width':"10rem",'height':"425px", flex: '1'}}>
          <img class="card-img-top" style={{'height':"295px", flex: '1'}} src={Image1} alt="Card image cap"/>
              <div class="card-body">
                  
              <h5 class="card-title" style={{'text-decoration':"underline",'margin-top':"10px"}}>Africa safari</h5>
              <p class="card-text">A complete website for safari done with node - jquery - bootstrap - EJS</p>
              <a  href="https://github.com/othmanedendane/projet_node_jquery_bottstrap_ZOO" className="btn btn-outline-success" title="Github">More <i class="fa fa-github"></i></a>
              </div>
        </div>

        &nbsp;&nbsp;&nbsp;

        <div id="card9" class="card" style={{'width':"10rem",'height':"425px", flex: '1'}}>
          <img class="card-img-top" style={{'height':"215px", flex: '1'}} src={Image9} alt="Card image cap"/>
              <div class="card-body">
                  
              <h5 class="card-title" style={{'text-decoration':"underline",'margin-top':"10px"}}>Linux script bash</h5>
              <p class="card-text">Linux - Script Shell CRUD (add - select - update - delete).</p>
              <a  href="https://github.com/othmanedendane/Linux_script_bash" className="btn btn-outline-success" title="Github">More <i class="fa fa-github"></i></a>
              </div>
        </div>
  
            
  
      
    </span>
    
    <span style={{display: 'flex', 'margin-top':'25px', flexDirection: 'row'}} >
            
            <div id="card10" class="card" style={{'width':"10rem",'height':"425px", flex: '1'}}>
            <img class="card-img-top" style={{'height':"215px", flex: '1'}} src={Image10} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title" style={{'text-decoration':"underline"}}>Full stack E-Learning website</h5>
              <p class="card-text">MERN - This E-Leaning website includes 4 categories and guide for 4 fields</p>
              
              
              <a id="ytb1" href="https://www.youtube.com/watch?v=q8AmqjoOLFc" className="btn btn-outline-danger" title="Youtube">Demo <i class="fa fa-youtube"></i></a>
            </div>
            </div>
            &nbsp;&nbsp;&nbsp;
  
  
  
          <div id="card11" class="card" style={{'width':"10rem",'height':"425px", flex: '1'}}>
          <img class="card-img-top" style={{'height':"215px", flex: '1'}} src={Image11} alt="Card image cap"/>
              <div class="card-body">
                  
              <h5 class="card-title" style={{'text-decoration':"underline",'margin-top':"10px"}}>Php - Escape rooms</h5>
              <p class="card-text">site that presents escape rooms with a customer account and an admin management account.</p>
              <a  href="https://github.com/othmanedendane/Php_Escape_rooms" className="btn btn-outline-success" title="Github">More <i class="fa fa-github"></i></a>
              </div>
        </div>

        &nbsp;&nbsp;&nbsp;

        <div id="card12" class="card" style={{'width':"10rem",'height':"425px", flex: '1'}}>
          <img class="card-img-top" style={{'height':"215px", flex: '1'}} src={Image12} alt="Card image cap"/>
              <div class="card-body">
                  
              <h5 class="card-title" style={{'text-decoration':"underline",'margin-top':"10px"}}>Php - Good food</h5>
              <p class="card-text">CRUD Php - Good food restaurant website </p>
              <a  href="https://github.com/othmanedendane/Php-LaBonneBouffe" className="btn btn-outline-success" title="Github">More <i class="fa fa-github"></i></a>
              </div>
        </div>
  
      
    </span>


    <span style={{display: 'flex', 'margin-top':'25px', flexDirection: 'row'}} >
            
            <div id="card13" class="card" style={{'width':"10rem",'height':"425px", flex: '1'}}>
            <img class="card-img-top" style={{'height':"215px", flex: '1'}} src={Image13} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title" style={{'text-decoration':"underline"}}>JCTQ</h5>
              <p class="card-text">The site I created during my internship for the company JCTQ (Jeune chambre tunisienne au Québec)</p>
              
              
            </div>
            </div>
            &nbsp;&nbsp;&nbsp;
  
  
  
          <div class="col d-none d-md-block" id="card14" style={{'width':"10rem",'height':"425px", flex: '1'}}>
          <img class="card-img-top" style={{'height':"215px", flex: '1'}} src={Image14} alt="Card image cap"/>
              <div class="card-body">
                  
              <h5 class="card-title" style={{'text-decoration':"underline",'margin-top':"10px"}}>Java - Projet mobile</h5>
              <p class="card-text">A mobile app Crud</p>
              
              </div>
        </div>

        &nbsp;&nbsp;&nbsp;

        <div id="card15" class="card" style={{'width':"10rem",'height':"425px", flex: '1'}}>
          <img class="card-img-top" style={{'height':"215px", flex: '1'}} src={Image15} alt="Card image cap"/>
              <div class="card-body">
                  
              <h5 class="card-title" style={{'text-decoration':"underline",'margin-top':"10px"}}>Face recognition</h5>
              <p class="card-text">One of my artificial intelligence projects with Python.</p>
              
              </div>
        </div>
  
      
    </span>

    <br/>
     
    
     <p><h5 style={{'text-align':"center",'font-family':'MV Boli',"margin-top":"15px",}}> "A winner is a dreamer who never gives up" - Nelson Mandela
     <br/>...
            </h5></p>

     <br/>

    </div>
        
   

        );
      }
    }
export default ProjectsN;