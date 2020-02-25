import * as React from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";

import * as allStates from "./data/allstates.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};

class MapChart extends React.Component{
  render(){
//const MapChart = () => {
  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                stroke="#FFF"
                geography={geo}
                fill="#DDD"
              />
            ))}
            {geographies.map(geo => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find(s => s.val === geo.id);
              return (
                <g key={geo.rsmKey + "-name"}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {cur.id}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                      >
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {cur.id}
                        </text>
                      </Annotation>
                    ))}
                </g>
              );
            })}
          </>
        )}
      </Geographies>




      <Annotation
        subject={[-74.006, 40.7128]}
        dx={-45}
        dy={-25}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >        
        <text x="-4" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"New York"}
        </text>
      </Annotation>

      


      <Marker coordinates={[-118.2437, 34.0522]}>
        <circle r={4} fill="#F53" />
        <text x="20" y="-15" fontSize={14} textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Los Angeles"}
        </text>
      </Marker>



      <Marker coordinates={[-87.6298, 41.8781]}>
        <circle r={4} fill="#F53" />
        <text x="25" y="-15" fontSize={14} textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Chicago"}
        </text>
      </Marker>

      <Marker coordinates={[-95.3698, 29.7604]}>
        <circle r={4} fill="#F53" />
        <text x="25" y="-15" fontSize={14} textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Houston"}
        </text>
      </Marker>

      <Marker coordinates={[-122.3321, 47.6062]}>
        <circle r={4} fill="#F53" />
        <text x="25" y="-15" fontSize={14} textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Seattle"}
        </text>
      </Marker>

      <Marker coordinates={[-96.7970, 32.7767]}>
        <circle r={4} fill="#F53" />
        <text x="25" y="-15" fontSize={14} textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Dallas"}
        </text>
      </Marker>

      <Marker coordinates={[-112.0740, 33.4484]}>
        <circle r={4} fill="#F53" />
        <text x="25" y="15" fontSize={14} textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Phoenix"}
        </text>
      </Marker>


    </ComposableMap>
  );
  }
};

export default MapChart;
