import React from 'react';
import { Map,GeoJsonLoader } from "pigeon-maps"
import { maptiler } from 'pigeon-maps/providers'


function App() {
  const maptilerProvider = maptiler('qxI5FZYAhQOyNwRo5kY4', 'streets')
  return (
    <div className="App">
      
       <Map provider={maptilerProvider} height={500} defaultCenter={[ 50.19296138642234, 15.838750875870064]} defaultZoom={12}>


        <GeoJsonLoader
          link={"http://localhost:3000/DataBackup/parkoviste3.geo.json"}
          styleCallback={(feature:any, hover:any) =>
            hover
              ? { fill: "#034078", stroke:"#034078",strokeWidth: "5",r: "0",}
              : { fill: "#034078", stroke:"#034078",strokeWidth: "5",r: "0",}
          }
          onClick={(pa) => alert("pocet mist:" +pa.payload.properties.POC_MIST)}
          />
      </Map>
    </div>
  );
}

export default App;
