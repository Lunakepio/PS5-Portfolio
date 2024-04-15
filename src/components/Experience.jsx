import { OrbitControls } from "@react-three/drei";
import { MeshRay } from "./godrays/Mesh";
import { MeshReflection } from "./reflection/Mesh";
import { BokehParticles } from "./BokehParticles";
import { Background } from "./Background";

export const Experience = ({ isMessageShow }) => {
  return (
    <>
      <Background />
      <MeshRay />
      <MeshReflection />
      {!isMessageShow ? (
        <>
          <BokehParticles isAbout={true} />
        </>
      ) : null}
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
