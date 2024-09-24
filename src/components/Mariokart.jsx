/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 mariokart.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function MarioKart(props) {
  const { nodes, materials } = useGLTF("/mesh/mariokart.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.mt_kart_Mario_S.geometry}
        material={materials.mt_kart_Mario_S}
      />
      <mesh
        geometry={nodes.mt_Kart_Mario_Tire_S001.geometry}
        material={materials.mt_Kart_Mario_Tire_S}
        position={[0, 0.22, -0.347]}
      />
      <mesh
        geometry={nodes.mt_Kart_Mario_Tire_S002.geometry}
        material={materials.mt_Kart_Mario_Tire_S}
        position={[0.384, 0.193, 0.441]}
      />
      <mesh
        geometry={nodes.mt_Kart_Mario_Tire_S003.geometry}
        material={materials.mt_Kart_Mario_Tire_S}
        position={[-0.393, 0.193, 0.441]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh geometry={nodes.mt_mario.geometry} material={materials.mt_mario} />
    </group>
  );
}

useGLTF.preload("/mariokart.glb");