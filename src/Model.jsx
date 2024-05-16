/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 beetle.gltf --transform 
Files: beetle.gltf [13.73MB] > C:\Users\hkuba\Downloads\beetle\beetle-transformed.glb [168.53KB] (99%)
Author: Daniel Roman (https://sketchfab.com/bizarromed)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/beetle-stylized-24b35ef164dd4db3ad3c0f228b4af6b3
Title: Beetle  Stylized
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export  function Model(props) {
  const model=useGLTF('/naruto.glb')
  return (
    <mesh>
      <primitive object={model.scene} scale={10} />
      
    </mesh>
    
  )
}



useGLTF.preload('/beetle-transformed.glb')
