import React, { useState } from 'react';
import logo from './logo.svg';
import {Routes,Route} from "react-router-dom"

function App() {
    const [Hrady, setHrady] = useState<any>([]);
    const [Kluby, setKluby] = useState<any>([]);
    const [Zamky, setZamky] = useState<any>([]);
    const [Divadla, setDivadla] = useState<any>([]);
    const [Rozhledny, setRozhledny] = useState<any>([]);
  


    setZamky(FetchData("https://services6.arcgis.com/ogJAiK65nXL1mXAW/arcgis/rest/services/Zámky/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson","http://localhost:3000/DataBackup/Zamky.geo.json"))
    setHrady(FetchData("https://services6.arcgis.com/ogJAiK65nXL1mXAW/arcgis/rest/services/Hrady/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson","http://localhost:3000/DataBackup/Hrady.geo.json"))
    setKluby(FetchData("https://services6.arcgis.com/ogJAiK65nXL1mXAW/arcgis/rest/services/Kluby/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson","http://localhost:3000/DataBackup/Kluby.geo.json"))
    setDivadla(FetchData("https://services6.arcgis.com/ogJAiK65nXL1mXAW/arcgis/rest/services/Divadla/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson","http://localhost:3000/DataBackup/Divadla.geo.json"))
    setRozhledny(FetchData("https://services6.arcgis.com/ogJAiK65nXL1mXAW/arcgis/rest/services/Rozhledny_a_vyhlídky/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson","http://localhost:3000/DataBackup/Rozhledny.geo.json"))
    function FetchData(url:any, backupUrl:any){
        fetch(url).then(response => response.json())
        .then(data => {return(data.features)})
        .catch(()=>fetch(backupUrl).then(response => response.json()).then(data => {return(data.features)}));
        return
    }
const data = Zamky.concat(Hrady.concat(Kluby.concat(Divadla.concat(Rozhledny)))).sort( function (a:any, b:any) {
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
    }

} );

  return (
    {data}
  );
}

export default App;
