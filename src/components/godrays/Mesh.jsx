import { Cylinder } from "@react-three/drei";


import GodRay from "./GodRay";
export const MeshRay = () => {

  return (
    <Cylinder
      args={[2, 0, 2, 248, 128, true]}
      position={[30, 10, 0]}
      rotation={[Math.PI, 0, 0]}
      scale={30}
    >
    <GodRay/>
    </Cylinder>
  );
};