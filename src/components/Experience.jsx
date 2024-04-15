import { OrbitControls, Preload } from "@react-three/drei";
import { MeshRay } from "./godrays/Mesh";
import { MeshReflection } from "./reflection/Mesh";
import { BokehParticles } from "./BokehParticles";
import { Background } from "./Background";
import { useAppStore } from "../store";

export const Experience = () => {
  return (
    <>
      <Background />
      <MeshRay />
      <MeshReflection />
      <BokehParticles isAbout={true} />
    </>
  );
};

export const ExperienceAbout = () => {
  return (
    <>
      <Background />
      <MeshRay />
      <MeshReflection />
      <BokehParticles isAbout={false} />
      <OrbitControls />
    </>
  );
};
