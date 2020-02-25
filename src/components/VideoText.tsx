import * as React from "react";
import "../styles/VideoText.scss"

const logo = require("../image/click.svg");

export class VideoText extends React.Component {    
    constructor(props:any) {
        super(props);   
    }


    render() {
        return (<div id="intro">
                  <p id="introTitle">
                    The doctor is just a <img src={logo} width="5%" height="5%" color="white" alt="click"/> away
                  </p>
                  <p id="introContent">
                    Virtually connect face-to-face to board-certified doctors in minutes.<br/><br/>
                    Anytime, anywhere. 24/7. It's your call.
                  </p>
                </div>);
    }
}