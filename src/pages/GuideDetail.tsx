import React, { useState } from 'react';
import { useParams } from 'react-router';

function App() {
  
  const { id } = useParams();
  return (
    <div className='GuideBox'>
      {id}
    </div>
  );
}

export default App;
