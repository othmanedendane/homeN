import React/*, { useEffect, useState }*/ from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
//import "../styles/home.css";
import 'react-bootstrap/Carousel';
import "../styles/footer.css";
import "../styles/jquery";
import Alert from 'react-bootstrap/Alert'
import "../styles/responsive.css";
import 'font-awesome/css/font-awesome.min.css';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
//import { Col, Row, Form } from "react-bootstrap";
//import Avatar from 'react-avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Test from '../components/test';
import Chip from '@mui/material/Chip';
import EmailIcon from '@mui/icons-material/Email';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import emailjs from 'emailjs-com';
import SendIcon from '@mui/icons-material/Send';
//import { Text, View } from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollToTop from "react-scroll-to-top";





import Image1 from "../images/eredix.jpeg";
import Image2 from "../images/code.png";
import Image3 from "../images/design.png";
import Image5 from "../images/coder.gif";
import Image4 from "../images/projects.png";


/*function Clock(){
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
        const date = new Date();
        setClockState(date.toLocaleTimeString());
    },1000);
    }, []);

    return <div>{clockState}</div>
}*/






const Badgee = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  




class HomeN extends React.Component{

    /*componentDidMount () {
        const script = document.createElement("script");
    
        script.src = new Date();
        script.async = true;

        //var dt = new Date();
        document.getElementById('date-time').innerHTML=script;
        document.body.appendChild(script);
    }*/
   
  
    
    render() {

      function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_8i64upq', 'template_l1fkeqh', e.target, 'user_5DewyRSTr6zMFsFhlpcOH')
          .then((result) => {
              console.log(result.text);
              
              alert ("e-mail sent !");
    
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
      
        return (
          
          <div>
            <br/>
            
                  
            <ScrollToTop />
                  <span style={{'vertical-align':"top", 'display':'inline-block'}}>
                  <Badgee
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                        >
                    <Image 
                    style={{'height':"55px", 'width':'55px','border-radius':'50%','display':'inline-block'}}
                    src={Image1} roundedCircle />
                    </Badgee>

                    

                      &nbsp;&nbsp;&nbsp;<h4 style={{'text-decoration':"underline", 'display':'inline-block', 'font-family':'Brush Script MT'}}>Othmane Dendane</h4>
                      
                      <ul class="social-network social-circle">
                      
                       <li id="link"><a style={{'margin-left':"725px"}} href="https://www.linkedin.com/in/othmane-dendane-55a26815b/" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                       <li id="git"><a href="https://github.com/othmanedendane" class="icoInstagram" title="Github"><i class="fa fa-github"></i></a></li>
                      </ul>
                      &nbsp;&nbsp;&nbsp;
                      <Link id="trad" to="/home" className="btn btn-outline-dark">French</Link>
                       
              </span>
              
                  
                  
                
             
          <br/>
          <br/>
         
          

          

            <div id="container" style={{"white-space":"nowrap","margin-top":"25px"}}>
                <div style={{"position":"relative"}}>
                <span id="time"><span style={{"white-space":"nowrap",'margin-left':'940px','position':'absolute','text-align':'center','font-style':'italic','font-family':'Copperplate Gothic Light','font-size':'large'}}> Montreal, <Test></Test></span> <span style={{"white-space":"nowrap",'margin-left':'957px','margin-top':'55px','position':'absolute','text-align':'center','font-family':'Calibri Light'}}>(in office till 6PM)</span></span>
                   <div id="art0">
                    <Image
                    style={{'height':"55px", 'width':'50px', "position":"absolute"}}
                    src={Image2}/><h1 style={{'font-family':'Goudy Old Style', 'margin-left':'55px','margin-top':'5px'}}>Web developer</h1>
                    </div>
                </div>
                <div id="art" style={{"position":"relative"}}> 
            <Image 
                    
                    style={{'height':"55px", 'width':'50px','position':'absolute',}}
                    src={Image3}/><h1 style={{'font-family':'Goudy Old Style', 'margin-left':'55px'}}>Designing websites</h1>
                </div>
            </div>   

            
            
        <br/>
        <br/>
            
            <p id="mottos"><h5 style={{'text-align':"center",'font-family':'MV Boli',"margin-top":"15px"}}>"With your vision, my savvy skills, and a hefty amount of coffee, 
            <br/>we can create a digital experience that is creative"</h5></p>
          
        <br/>
        <br/>

        <Chip icon={<EmailIcon />} label="othmanedendane99@gmail.com" color="success"/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Chip id="lil" icon={<PermPhoneMsgIcon />} label="(514) 943-2650" color="success"/>
        <br/>
        <br/>
        
            
          <span style={{display: 'flex', flexDirection: 'row'}} >
            
          <div id="cardo" class="card" style={{'width':"18rem", flex: '1'}}>
          <img id="pic1" class="card-img-top" src={Image4} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title" style={{'text-decoration':"underline"}}>Hi There! I'm Othmane, and i create websites.</h5>
            <p class="card-text">I understand both the visual and functional aspects of creating for the web 
            and my mission is to bring more beauty, creativity, 
            and good ideas into the world through web development.</p>
            
            <Link id="toabout" to="/aboutN" className="btn btn-success">About me</Link>
          </div>
          </div>




        <div id="cardi" class="card" style={{'width':"18rem", flex: '1'}}>
        <img class="card-img-top" src={Image5} alt="Card image cap"/>
            <div class="card-body">
                
            <h5 class="card-title" style={{'text-decoration':"underline",'margin-top':"10px"}}>Projects</h5>
            <p class="card-text">In this part, I have collected the best projects that I have already done.</p>
            <Link id="topro" to="/projectsN" className="btn btn-success">More details</Link>
            </div>
      </div>


    
  </span>



<br/>

  <div class="card text-center">
  <div class="card-header" style={{'text-shadow': '1px 1px 1px green,2px 2px 1px white', 'letter-spacing': '6px', 'word-spacing': '10px'}}>
    Resume !
  </div>
  <div class="card-body">
    <h5 class="card-title" style={{'text-decoration':"underline"}}>Skills</h5>
    <p class="card-text">{<CodeIcon />} Web development {<CodeIcon />}
    <br/>
    {<StorageIcon />} Database {<StorageIcon />}
    <br/>
    {<DesktopWindowsIcon />} Desktop app {<DesktopWindowsIcon />}
    <br/>
    {<PhoneIphoneIcon />} Mobile app development {<PhoneIphoneIcon />}
    <br/>
    {<PrecisionManufacturingIcon />} Machine learning {<PrecisionManufacturingIcon />}
    <br/>
    {<SmartToyIcon />} Artificial intelligence {<SmartToyIcon />}
    </p>
    <Link id="toscroll" to="/resumeN" className="btn btn-success">Learn more..</Link>
  </div>
  <div class="card-footer text-muted">
  2 College diplomas - 3 internships
  </div>
</div>

<br/>

<div>
                      <h3 style={{'text-decoration':"underline",'font-style':'oblique','text-align':'center','font-family':'Copperplate Gothic Light'}}>Feel free to connect with me!</h3>
                  <div className="container">
                <form className="contact-form" onSubmit={sendEmail}>

                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>    

                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Adress" name="email" />
                    </div> 

                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div> 

                  <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Message" name="message" />
                    </div> 

                    <div className="col-8 pt-3 mx-auto">
                        <input id="cen" type="submit" className="btn btn-success" value="Send"></input>
                    </div> 
                  </div>
                </form>
                <br/>
                </div>
                
                </div>
                
          </div>
          



          


          
          
        );


       
      }
    }
export default HomeN;