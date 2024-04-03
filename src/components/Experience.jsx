import { OrbitControls } from "@react-three/drei";
import { MeshRay } from "./godrays/Mesh";
import { MeshReflection } from "./reflection/Mesh";
import { Bokeh } from "./Bokeh";
import { BokehParticles } from "./BokehParticles";


export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <MeshRay />
      <MeshReflection />
      <BokehParticles />
      <OrbitControls />
    </>
  );
};