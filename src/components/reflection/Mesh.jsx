import { Circle, Cylinder } from "@react-three/drei";
import Reflexion from "./Reflexion";



export const MeshReflection = () => {

  return (
    <Circle
      args={[5, 32]}
      position={[30, -20, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={10}
    >
    <Reflexion/>
    </Circle>
  );
};