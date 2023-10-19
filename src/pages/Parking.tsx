import React, { useState } from 'react';
import { Map,GeoJsonLoader,Draggable, Point,Marker } from "pigeon-maps"
import { maptiler } from 'pigeon-maps/providers'
import { MiddleOfPolygon } from '../services/middleOfPolygon';


function App() {
  const maptilerProvider = maptiler('qxI5FZYAhQOyNwRo5kY4', 'streets')
  const [parking, setParking] = useState([]);
  const [top5, settop5] = useState([]);

    const [anchor, setAnchor] = useState<Point>();

    fetch("http://localhost:3000/DataBackup/parkoviste3.geo.json").then(response => response.json())
    .then(data => setParking(data.features))
    .catch(error => console.error(error));

  return (
    <div className="App">
      
       <Map provider={maptilerProvider} height={500} defaultCenter={[ 50.19296138642234, 15.838750875870064]} defaultZoom={14}>


        <GeoJsonLoader
          link={"http://localhost:3000/DataBackup/parkoviste3.geo.json"}
          styleCallback={(feature:any) =>
            feature={ stroke:"#0340788A",fill:"#0340788A",strokeWidth: "2"}
          }
          onClick={(pa) => alert("pocet mist:" +pa.payload.properties.POC_MIST)}
          />
          
          <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={(anchor)=>{setAnchor(anchor);settop5(MiddleOfPolygon(parking,anchor))}}>
            <Marker color='red' width={50}  />
          </Draggable>
      </Map>

      {JSON.stringify(top5)} 

      <br/>
    </div>
  );
}

export default App;
