import React, { useRef} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export const Bokeh = ({position}) => {
  const texture = useLoader(TextureLoader, "/circle_05.png");

  const materialRef = useRef();
  const colors = ["#ffb05c", "#ffc88c", "#fae9d7", "#c7853e"]

  useGSAP(() => {
    gsap.to(materialRef.current, {
      opacity: 0,
      duration: Math.random() * 4 + 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
    
  }, []);

  const randomizedScale = (Math.random() * 2);
  return (
    <mesh position={[position[0], position[1], position[2]]} rotation={[0, Math.PI, 0]} scale={randomizedScale}>
      <planeGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={colors[Math.floor(Math.random() * colors.length)]} ref={materialRef}  map={texture} opacity={1} transparent depthWrite={false} />
    </mesh>
  )
}