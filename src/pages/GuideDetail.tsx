import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FetchService } from '../services/fetchService';
import { Map, Marker,Overlay,GeoJson } from "pigeon-maps"
import { maptiler } from 'pigeon-maps/providers'
import { BusFormPoint } from '../services/BusFromPoint';


function App() {
  const maptilerProvider = maptiler('qxI5FZYAhQOyNwRo5kY4', 'streets')
  
  const { id } = useParams();
  const asd = FetchService().data.filter(function (i:any){
    return i.properties.dp_id===id;
});

  //console.log(asd)
    

  return (
    <div className='GuideBox'>
      <Map>
        
      </Map>
      {JSON.stringify(asd)}
      <br/>
      {JSON.stringify(JSON.stringify(asd))}
    </div>
  );
}

export default App;
