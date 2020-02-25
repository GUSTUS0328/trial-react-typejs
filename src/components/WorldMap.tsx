import * as React from "react";

import "../styles/WorldMap.scss";

import MapChart from "./MapChart";


export class WorldMap extends React.Component{
    render(){
        return (
            <div>
            <p id="map_intro">An example of using d3.js, source code from https://www.react-simple-maps.io/</p>
            <hr />
            <MapChart />
            </div>
        );
    }
}
