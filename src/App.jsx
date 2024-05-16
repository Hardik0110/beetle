import React from 'react';
import './App.css'
import * as THREE from 'three'; 
import { Model } from './Model'
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'

function App() {

  return (

    <div className='App'>
      
    <div className='wrapper'>
    <h1 className='textcolors'>3D Beetle Model <br /><br />
      This website is made up using HTML , CSS , ReactJS and THREE JS . The 3JS is used to upload the 3D model of the Beetle.
      Also the orbital controls are also used so you can zoom in , zoom out and rotate the model as you like. 
      The file extension of 3D model is '.glb' .  
    </h1>
      <div className='card'>
        <div className='product-canvas'>
          
   <Canvas>
      <ambientLight />
      <Model/>
      <Environment preset='sunset' />
      <OrbitControls />
      
   </Canvas>
   <h2 className='textcolors'>ABOVE GIVEN FIGURE IS A 3D MODEL SO YOU CAN ROTATE OR ZOOM IT HOWEVER YOU LIKE...</h2>
   </div>
   </div> 
   </div>
   </div>
  )
}

export default App
