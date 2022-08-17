import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/responsive.css";
import "../styles/jquery";
import Image from 'react-bootstrap/Image';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SmartToyIcon from '@mui/icons-material/SmartToy';

import DownloadIcon from '@mui/icons-material/Download';
import cv from "../images/Othmane dendane.pdf";
import bulletin from "../images/bulletin.pdf";

import Image1 from "../images/react.jpeg";
import Image2 from "../images/designer.jpeg";
import Image3 from "../images/efa.jpeg";
import Image4 from "../images/teccart.jpeg";
import Image5 from "../images/stage1.jpeg";
import Image6 from "../images/stage2.jpeg";


class Resume extends React.Component{
    render() {
        return (
          <div className="container">
            <br/>
                <Link to="/home" className="btn btn-light">{<KeyboardBackspaceIcon />} &nbsp;Précedent</Link>
                <br/>
                <br/>
                <br/>
                
            <button id="dowcv" class="btn btn-outline-warning" ><a style={{'text-shadow': '1px 1px 1px yellow,2px 2px 1px white', 'letter-spacing': '3px', 'word-spacing': '5px','font-style':'oblique','text-align':'center','font-family':'Copperplate Gothic Light'}} href={cv}>{<DownloadIcon />} Télécharger cv {<DownloadIcon />}</a></button>
            <br/>
            <br/>
            <h2 style={{'font-family':'Lucida Sans Typewriter',"margin-top":"15px"}}>DEC en informatique de gestion :</h2>
            
            <p id="moins" style={{'font-family':'Lucida Sans Typewriter','margin-left':"50px",'margin-top':'25px'}} class="card-text">{<CodeIcon />} <span style={{'text-decoration':"underline",'font-weight':'bold'}}>Développement web :</span> HTML - CSS - JavaScript - JQuerry - Bootstrap - PHP - Node.js - Asp.net - React - Angular.
    <br/>
    {<StorageIcon />} <span style={{'text-decoration':"underline",'font-weight':'bold'}}>Base de données :</span> MySQL - Oracle - SQL - PLSQL - MongoDB
    <br/>
    {<DesktopWindowsIcon />} <span style={{'text-decoration':"underline",'font-weight':'bold'}}>Application Desktop :</span> C#
    <br/>
    {<PhoneIphoneIcon />} <span style={{'text-decoration':"underline",'font-weight':'bold'}}>Développement application mobile :</span> Java - Kotlin - Xamarin
    <br/>
    {<PrecisionManufacturingIcon />} <span style={{'text-decoration':"underline",'font-weight':'bold'}}>Apprentissage automatique :</span> Python (Anaconda)
    <br/>
    {<SmartToyIcon />} <span style={{'text-decoration':"underline",'font-weight':'bold'}}>Intillegence artificielle :</span> Python
    </p>
    <br/>
    <br/>
    <p class="row">
        <div class="col-sm-6">
    <Image id="one"
                    
                    src={Image3}/>
        </div>
        <div class="col-sm-6">
    <Image id="two"
                    
                    src={Image4}/>
        </div>
    </p>
    <br/>
    
    <div style={{'margin-top':'0px'}}>
    <Image id="three"
                    
                    src={Image5}/>
    <Image id="four"
                    
                    src={Image6}/>
    </div>
    <br/>
    <br/>
    
    <p>
      
    <Image id="five"
                    
                    src={Image1}/>
    <Image id="six"
                    
                    src={Image2}/>
    </p>
    <br/>
    <br/>
    <br/>
    <br/>
    <button id="dowbu"  class="btn btn-outline-warning" ><a id="bulletin" href={bulletin}>{<DownloadIcon />} Télécharger bulletin {<DownloadIcon />}</a></button>
            <br/>
            <br/>

          </div>
        );
      }
    }
export default Resume;