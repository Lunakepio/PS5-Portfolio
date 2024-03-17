import { OrbitControls } from "@react-three/drei";
import { MeshRay } from "./godrays/Mesh";
import { MeshReflection } from "./reflection/Mesh";


export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <MeshRay />
      <MeshReflection />
    </>
  );
};