import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ControllComponents from "./components/controllComponents"; // Make sure the import path is correct and matches the file name
import ThreeDObjects from "./components/3dObjects";
import { Canvas } from "@react-three/fiber";

function App() {
  const initialState = [
    { speed: 0.01, isRotating: true, isVisible: true, position: [-4, 0, 0], geometry: 'box' },
    { speed: 0.01, isRotating: true, isVisible: true, position: [0, 0, 0], geometry: 'torus' },
    { speed: 0.01, isRotating: true, isVisible: true, position: [4, 0, 0], geometry: 'dode' },
  ];

  const [objects,setObjects] = useState(initialState)
  return (
   
<>
<div className="w-screen h-screen flex flex-col ">
  <div className="w-full h-1/3 justify-center items-center" >

  <ControllComponents objects={objects} setObjects={setObjects} />

  </div>

  <div className="w-full h-2/3   ">
  <Canvas>
      <ambientLight intensity={10}/>
  {objects.map((object)=>{
    return (
      <>
    

      <ThreeDObjects object={object}/>

      </>
    )
  })}
  </Canvas>
    
  </div>

</div>
     
</>
  );
}

export default App;
