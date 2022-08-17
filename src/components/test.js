import React, { useEffect, useState } from 'react';
//import Navbar from './navbar';
//import Footer from './footer';

function Test(){
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
        const date = new Date();
        setClockState(date.toLocaleTimeString());
    },);
    }, []);

    return <div>{clockState}</div>
}

/*class Test extends React.Component{
    render() {
        return (
          <div className="container">
           <h1>Hello world!</h1>
          </div>
        );
      }
    }*/
export default Test;