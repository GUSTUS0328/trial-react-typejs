import * as React from "react";
import * as ReactDOM from "react-dom";

import { Title } from "./components/Title";
import { BgVideo } from "./components/BgVideo";
import { VideoText } from "./components/VideoText";
import { FakeJson } from "./components/FakeJson";
import { WorldMap } from "./components/WorldMap";
//import "../index.css"



ReactDOM.render(
    (
    <div>
    <Title company="Trial" />
    

    <div id="bg_video">
    <BgVideo />
    <VideoText />
    </div>


    <hr />
    <WorldMap />

    <hr />
    <FakeJson />
    <hr />

    

    
    </div>
    
    
    ),
    document.getElementById("root")
);