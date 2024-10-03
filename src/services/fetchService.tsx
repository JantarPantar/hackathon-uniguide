import React, { useState } from "react";
import { Map, Marker,Overlay,GeoJson } from "pigeon-maps"
import {ReactComponent as ReactLogo} from '../assets/Point.svg';


export function FetchService() {

  const [Hrady, setHrady] = useState([]);
  const [Kluby, setKluby] = useState([]);
  const [Zamky, setZamky] = useState([]);
  const [Divadla, setDivadla] = useState([]);
  const [Rozhledny, setRozhledny] = useState([]);
  const [Kina, setKina] = useState([]);
  const [Muzea, setMuzea] = useState([]);

  fetch("./DataBackup/Hrady.geo.json").then(response => response.json())
  .then(data => setHrady(data.features))
  .catch(error => console.error(error));
  fetch("./DataBackup/Kluby.geo.json").then(response => response.json())
  .then(data => setKluby(data.features))
  .catch(error => console.error(error));
  fetch("./DataBackup/Divadla.geo.json").then(response => response.json())
  .then(data => setDivadla(data.features))
  .catch(error => console.error(error));
  fetch("./DataBackup/Rozhledny.geo.json").then(response => response.json())
  .then(data => setRozhledny(data.features))
  .catch(error => console.error(error));
  fetch("./DataBackup/Zamky.geo.json").then(response => response.json())
  .then(data => setZamky(data.features))
  .catch(error => console.error(error));
  fetch("./DataBackup/Kina.geo.json").then(response => response.json())
  .then(data => setKina(data.features))
  .catch(error => console.error(error));
  fetch("./DataBackup/Muzea.geo.json").then(response => response.json())
  .then(data => setMuzea(data.features))
  .catch(error => console.error(error));

  
  const data =Zamky.concat(Hrady.concat(Kluby.concat(Divadla.concat((Rozhledny.concat(Kina.concat(Muzea)))))));
   Zamky.concat(Hrady.concat(Kluby.concat(Divadla.concat(Rozhledny)))).sort( function (a:any, b:any) {
    var myLong = 15.6252330;
    var myLat = 49.8022514;
    var diffA = (a.properties.y - myLat) + (a.properties.y - myLat);
    var diffB = (b.properties.x - myLong) + (b.properties.x - myLong);

    if(diffA > diffB){
        return 1;
    } else if(diffA < diffB){
        return -1;
    } else {
        return 0; 
    }});
    return (
      {data}
    );
  }