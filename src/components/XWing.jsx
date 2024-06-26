/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.17 xWing.glb 
Author: Daniel (https://sketchfab.com/DanielAndersson)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/star-wars-x-wing-a93f607a94d747568371b8910a81fb12
Title: Star Wars: X-Wing
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function XWing(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./mesh/xWing.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} scale={0.5} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={8.333}>
          <group name="Root">
            <group name="X-Wing">
              <group name="WingRotation" position={[0, -1.405, -0.012]} />
              <group name="LeftWingBottom" position={[0, 0, -0.012]}>
                <group name="LeftWingBottomHullPlates">
                  <mesh name="LeftWingBottomHullPlates_0" geometry={nodes.LeftWingBottomHullPlates_0.geometry} material={materials.ScratchedMetal} />
                  <mesh name="LeftWingBottomHullPlates_1" geometry={nodes.LeftWingBottomHullPlates_1.geometry} material={materials.ScratchedMetalDark} />
                  <mesh name="LeftWingBottomHullPlates_2" geometry={nodes.LeftWingBottomHullPlates_2.geometry} material={materials.ScratchedMetalRed} />
                  <mesh name="LeftWingBottomHullPlates_3" geometry={nodes.LeftWingBottomHullPlates_3.geometry} material={materials.ScratchedMetalYellow} />
                </group>
                <group name="LeftWingBottomEngineAndGreebles">
                  <mesh name="LeftWingBottomEngineAndGreebles_0" geometry={nodes.LeftWingBottomEngineAndGreebles_0.geometry} material={materials.ScratchedMetal} />
                  <mesh name="LeftWingBottomEngineAndGreebles_1" geometry={nodes.LeftWingBottomEngineAndGreebles_1.geometry} material={materials.ScratchedMetalDark} />
                  <mesh name="LeftWingBottomEngineAndGreebles_2" geometry={nodes.LeftWingBottomEngineAndGreebles_2.geometry} material={materials.ScratchedMetalRed} />
                  <mesh name="LeftWingBottomEngineAndGreebles_3" geometry={nodes.LeftWingBottomEngineAndGreebles_3.geometry} material={materials.YellowEngineGlow} />
                </group>
                <mesh name="LeftWingBottom_0" geometry={nodes.LeftWingBottom_0.geometry} material={materials.ScratchedMetal} />
                <mesh name="LeftWingBottom_1" geometry={nodes.LeftWingBottom_1.geometry} material={materials.ScratchedMetalDark} />
                <mesh name="LeftWingBottom_2" geometry={nodes.LeftWingBottom_2.geometry} material={materials.ScratchedMetalRed} />
                <mesh name="LeftWingBottom_3" geometry={nodes.LeftWingBottom_3.geometry} material={materials.ScratchedMetalYellow} />
              </group>
              <group name="LeftWingTop" position={[0, 0, -0.012]}>
                <group name="LeftWingTopHullPlates">
                  <mesh name="LeftWingTopHullPlates_0" geometry={nodes.LeftWingTopHullPlates_0.geometry} material={materials.ScratchedMetal} />
                  <mesh name="LeftWingTopHullPlates_1" geometry={nodes.LeftWingTopHullPlates_1.geometry} material={materials.ScratchedMetalDark} />
                  <mesh name="LeftWingTopHullPlates_2" geometry={nodes.LeftWingTopHullPlates_2.geometry} material={materials.ScratchedMetalRed} />
                  <mesh name="LeftWingTopHullPlates_3" geometry={nodes.LeftWingTopHullPlates_3.geometry} material={materials.ScratchedMetalYellow} />
                </group>
                <group name="LeftWingTopEngineAndGreebles">
                  <mesh name="LeftWingTopEngineAndGreebles_0" geometry={nodes.LeftWingTopEngineAndGreebles_0.geometry} material={materials.ScratchedMetal} />
                  <mesh name="LeftWingTopEngineAndGreebles_1" geometry={nodes.LeftWingTopEngineAndGreebles_1.geometry} material={materials.ScratchedMetalDark} />
                  <mesh name="LeftWingTopEngineAndGreebles_2" geometry={nodes.LeftWingTopEngineAndGreebles_2.geometry} material={materials.ScratchedMetalRed} />
                  <mesh name="LeftWingTopEngineAndGreebles_3" geometry={nodes.LeftWingTopEngineAndGreebles_3.geometry} material={materials.YellowEngineGlow} />
                </group>
                <mesh name="LeftWingTop_0" geometry={nodes.LeftWingTop_0.geometry} material={materials.ScratchedMetal} />
                <mesh name="LeftWingTop_1" geometry={nodes.LeftWingTop_1.geometry} material={materials.ScratchedMetalDark} />
                <mesh name="LeftWingTop_2" geometry={nodes.LeftWingTop_2.geometry} material={materials.ScratchedMetalRed} />
                <mesh name="LeftWingTop_3" geometry={nodes.LeftWingTop_3.geometry} material={materials.ScratchedMetalYellow} />
              </group>
              <group name="RightWingTop" position={[0, 0, -0.012]}>
                <group name="RightWingTopEngineAndGreebles">
                  <mesh name="RightWingTopEngineAndGreebles_0" geometry={nodes.RightWingTopEngineAndGreebles_0.geometry} material={materials.ScratchedMetal} />
                  <mesh name="RightWingTopEngineAndGreebles_1" geometry={nodes.RightWingTopEngineAndGreebles_1.geometry} material={materials.ScratchedMetalDark} />
                  <mesh name="RightWingTopEngineAndGreebles_2" geometry={nodes.RightWingTopEngineAndGreebles_2.geometry} material={materials.ScratchedMetalRed} />
                  <mesh name="RightWingTopEngineAndGreebles_3" geometry={nodes.RightWingTopEngineAndGreebles_3.geometry} material={materials.YellowEngineGlow} />
                </group>
                <group name="RightWingTopHullPlates">
                  <mesh name="RightWingTopHullPlates_0" geometry={nodes.RightWingTopHullPlates_0.geometry} material={materials.ScratchedMetal} />
                  <mesh name="RightWingTopHullPlates_1" geometry={nodes.RightWingTopHullPlates_1.geometry} material={materials.ScratchedMetalDark} />
                  <mesh name="RightWingTopHullPlates_2" geometry={nodes.RightWingTopHullPlates_2.geometry} material={materials.ScratchedMetalRed} />
                  <mesh name="RightWingTopHullPlates_3" geometry={nodes.RightWingTopHullPlates_3.geometry} material={materials.ScratchedMetalYellow} />
                </group>
                <mesh name="RightWingTop_0" geometry={nodes.RightWingTop_0.geometry} material={materials.ScratchedMetal} />
                <mesh name="RightWingTop_1" geometry={nodes.RightWingTop_1.geometry} material={materials.ScratchedMetalDark} />
                <mesh name="RightWingTop_2" geometry={nodes.RightWingTop_2.geometry} material={materials.ScratchedMetalRed} />
                <mesh name="RightWingTop_3" geometry={nodes.RightWingTop_3.geometry} material={materials.ScratchedMetalYellow} />
              </group>
              <group name="RightWingBottom" position={[0, 0, -0.012]}>
                <group name="RightWingBottomEngineAndGreebles">
                  <mesh name="RightWingBottomEngineAndGreebles_0" geometry={nodes.RightWingBottomEngineAndGreebles_0.geometry} material={materials.ScratchedMetal} />
                  <mesh name="RightWingBottomEngineAndGreebles_1" geometry={nodes.RightWingBottomEngineAndGreebles_1.geometry} material={materials.ScratchedMetalDark} />
                  <mesh name="RightWingBottomEngineAndGreebles_2" geometry={nodes.RightWingBottomEngineAndGreebles_2.geometry} material={materials.ScratchedMetalRed} />
                  <mesh name="RightWingBottomEngineAndGreebles_3" geometry={nodes.RightWingBottomEngineAndGreebles_3.geometry} material={materials.YellowEngineGlow} />
                </group>
                <group name="RightWingBottomHullPlates">
                  <mesh name="RightWingBottomHullPlates_0" geometry={nodes.RightWingBottomHullPlates_0.geometry} material={materials.ScratchedMetal} />
                  <mesh name="RightWingBottomHullPlates_1" geometry={nodes.RightWingBottomHullPlates_1.geometry} material={materials.ScratchedMetalDark} />
                  <mesh name="RightWingBottomHullPlates_2" geometry={nodes.RightWingBottomHullPlates_2.geometry} material={materials.ScratchedMetalRed} />
                  <mesh name="RightWingBottomHullPlates_3" geometry={nodes.RightWingBottomHullPlates_3.geometry} material={materials.ScratchedMetalYellow} />
                </group>
                <mesh name="RightWingBottom_0" geometry={nodes.RightWingBottom_0.geometry} material={materials.ScratchedMetal} />
                <mesh name="RightWingBottom_1" geometry={nodes.RightWingBottom_1.geometry} material={materials.ScratchedMetalDark} />
                <mesh name="RightWingBottom_2" geometry={nodes.RightWingBottom_2.geometry} material={materials.ScratchedMetalRed} />
                <mesh name="RightWingBottom_3" geometry={nodes.RightWingBottom_3.geometry} material={materials.ScratchedMetalYellow} />
              </group>
              <group name="CentralSection">
                <mesh name="CentralSection_0" geometry={nodes.CentralSection_0.geometry} material={materials.ScratchedMetal} />
                <mesh name="CentralSection_1" geometry={nodes.CentralSection_1.geometry} material={materials.ReflectiveGlass} />
                <mesh name="CentralSection_2" geometry={nodes.CentralSection_2.geometry} material={materials.ScratchedMetalDark} />
                <mesh name="CentralSection_3" geometry={nodes.CentralSection_3.geometry} material={materials.ScratchedMetalYellow} />
              </group>
              <group name="CentralSectionGreebles1" position={[0, 0.352, 0.067]}>
                <mesh name="CentralSectionGreebles1_0" geometry={nodes.CentralSectionGreebles1_0.geometry} material={materials.ScratchedMetalDark} />
              </group>
              <group name="CentralSectionGreebles2" position={[0, 0.351, 0.067]}>
                <mesh name="CentralSectionGreebles2_0" geometry={nodes.CentralSectionGreebles2_0.geometry} material={materials.ScratchedMetalDark} />
              </group>
              <group name="CentralSectionHullPlates">
                <mesh name="CentralSectionHullPlates_0" geometry={nodes.CentralSectionHullPlates_0.geometry} material={materials.ScratchedMetal} />
                <mesh name="CentralSectionHullPlates_1" geometry={nodes.CentralSectionHullPlates_1.geometry} material={materials.ScratchedMetalRed} />
              </group>
              <group name="R2Body" position={[0, 0.169, 0.086]}>
                <mesh name="R2Body_0" geometry={nodes.R2Body_0.geometry} material={materials.MetalWhite} />
              </group>
              <group name="R2Head" position={[0, 0.169, 0.086]}>
                <mesh name="R2Head_0" geometry={nodes.R2Head_0.geometry} material={materials.MetalGrey} />
                <mesh name="R2Head_1" geometry={nodes.R2Head_1.geometry} material={materials.MetalPurple} />
                <mesh name="R2Head_2" geometry={nodes.R2Head_2.geometry} material={materials.ReflectiveGlass} />
                <mesh name="R2Head_3" geometry={nodes.R2Head_3.geometry} material={materials.ReflectiveGlassRed} />
              </group>
              <group name="R2HullPlates" position={[0, 0.169, 0.086]}>
                <mesh name="R2HullPlates_0" geometry={nodes.R2HullPlates_0.geometry} material={materials.MetalWhite} />
                <mesh name="R2HullPlates_1" geometry={nodes.R2HullPlates_1.geometry} material={materials.MetalPurple} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./mesh/xWing.glb')
