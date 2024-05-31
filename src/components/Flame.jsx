import { useRef } from "react";
import { GodRays } from "@react-three/postprocessing";

export const Flame = ({ position }) => {
  const ref = useRef();

  return (
    <group ref={ref}>
      <mesh position={position}>
        <cylinderGeometry
          args={[0.001, 0.025, 0.3, 32]}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[1, 1, 1]}
        />
        <GodRays />
        <pointLight color="#d260fe" intensity={2} position={[0, 0, 0]} />
      </mesh>
    </group>
  );
};
