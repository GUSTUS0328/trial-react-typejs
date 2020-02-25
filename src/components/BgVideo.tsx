import * as React from "react";
import "../styles/BgVideo.scss"
//import theVideo from "../video/Coverr-office.mp4"

const theVideo = require("../video/The-Kayak.mp4");
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class BgVideo extends React.Component {    
    constructor(props:any) {
        super(props);   
    }


    render() {
        return (<video autoPlay muted loop id="myVideo">
                    <source src={theVideo} type="video/mp4"/>
                </video>);
    }
}