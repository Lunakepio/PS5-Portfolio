/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 arwinghigh.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Arwinghigh(props) {
  const { nodes, materials } = useGLTF("/mesh/arwinghigh.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials.Material_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane001_Plane004.geometry}
        material={materials.Material_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/mesh/arwinghigh.glb");
