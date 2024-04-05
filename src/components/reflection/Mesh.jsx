import { Circle } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";

import Reflexion from "./Reflexion";
import { useGSAP } from "@gsap/react";

export const MeshReflection = () => {
  const reflexionRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      reflexionRef.current.scale,
      {
        x: 0,
        y: 0,
        z: 0,
      },
      {
        x: 10,
        y: 10,
        z: 10,
        duration: 3,
        delay: 1,
      },
    );
  }, []);

  return (
    <Circle
      args={[5, 32]}
      position={[30, -20, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={10}
      ref={reflexionRef}
    >
      <Reflexion />
    </Circle>
  );
};
