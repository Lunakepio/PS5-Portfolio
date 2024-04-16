import { OrbitControls, Preload } from "@react-three/drei";
import { MeshRay } from "./godrays/Mesh";
import { MeshReflection } from "./reflection/Mesh";
import { BokehParticles } from "./BokehParticles";
import { Background } from "./Background";

export const Experience = () => {
  return (
    <>
      <Background />
      <MeshRay />
      <MeshReflection />
      <BokehParticles />
    </>
  );
};

export const ExperienceAbout = () => {
  return (
    <>
      <Background />
      <MeshRay />
      <MeshReflection />
      <BokehParticles />
      <OrbitControls />
    </>
  );
};
