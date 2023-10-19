import React, { useState } from 'react';
import { Map, Marker,Overlay,GeoJson } from "pigeon-maps"

import {FetchService} from "../services/fetchService"
import { maptiler } from 'pigeon-maps/providers'

function App() {
  const [Hrady, HradySet] = useState(true);
  const [Kluby, KlubySet] = useState(true);
  const [Archi, ArchiSet] = useState(true);

  const [data, setData] = useState([]);
  const [geo, setGeo] = useState([50.20923, 15.83277]);
  const [zoom, setZoom] = useState(12);
  const [hover, setHover] = useState("");
  const [position, setPosition] = useState([0,0]);

  const maptilerProvider = maptiler('qxI5FZYAhQOyNwRo5kY4', 'streets')

  fetch("http://localhost:3000/Data/Architekt.geo.json").then(response => response.json())
  .then(data => setData(data.features))
  .catch(error => console.error(error));

  function GetColor(value:any){
    if (value.includes("HRAD")) {
      return "#989595"
    }
    else if (value.includes("ZAMKY")) {
      return "#cdc1c1"
    }
    else if (value.includes("ROZHL")) {
      return "#90d285"
    }
    else if (value.includes("KINA")) {
      return "#6b8ea4"
    }
    else if (value.includes("DIVFILH")) {
      return "#9c7e5f"
    }
    else if (value.includes("KLUB")) {
      return "#14aad0"
    }
  }
  return (
    <div className='GuideBox'>
      <div>
        <label className='CategoryCheckbox'><span data-text="Kluby"></span><input type="checkbox" /></label>
        <label className='CategoryCheckbox'><span data-text="Hrady"></span><input type="checkbox" /></label>
        <label className='CategoryCheckbox'><span data-text="Zamky"></span><input type="checkbox" /></label>
        <label className='CategoryCheckbox'><span data-text="Kina"></span><input type="checkbox" /></label>
        <label className='CategoryCheckbox'><span data-text="Rozhledny"></span><input type="checkbox" /></label>
        <label className='CategoryCheckbox'><span data-text="Muzea a galerie"></span><input type="checkbox" /></label>
        <label className='CategoryCheckbox'><span data-text="Divadla a filharmonie"></span><input type="checkbox" /></label>
      </div>
      <Map provider={maptilerProvider} height={500} width={1550} center={[geo[0],geo[1]]} zoom={zoom}>
        {FetchService().data.map((number:any) =>      
          <Marker onMouseOver={() => {setPosition([number.properties.y, number.properties.x]);setHover(number.properties.nazev)}} onMouseOut={() => setHover("")} color={GetColor(number.properties.dp_id)} width={50} anchor={[number.properties.y, number.properties.x]} />
        )}
        <Overlay anchor={[position[0], position[1]]} offset={[40,10]} >
          <h4>{hover}</h4>
        </Overlay>
      </Map>
      <div>
        {FetchService().data.map((item:any) =>
          <div onClick={()=>{setGeo([item.properties.y,item.properties.x]);setZoom(17)}}>
              <div style={{'backgroundColor':GetColor(item.properties.dp_id)}}></div>
              <div>
                <p>{item.properties.nazev}</p>
                <a target='_blank' href={item.properties.www}>Web</a>
              </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
