import { Cylinder } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import GodRay from "./GodRay";
import { useGSAP } from "@gsap/react";

export const MeshRay = () => {
  const godRayRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      godRayRef.current.scale,
      {
        x: 0,
        z: 0,
      },
      {
        x: 30,
        z: 30,
        duration: 3,
        delay: 1,
      },
    );
  }, []);
  return (
    <Cylinder
      args={[2, 0, 2, 248, 128, true]}
      position={[30, 10, 0]}
      rotation={[Math.PI, 0, 0]}
      scale={30}
      ref={godRayRef}
    >
      <GodRay />
    </Cylinder>
  );
};
