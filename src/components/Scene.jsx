import { Canvas } from "@react-three/fiber";
import { Experience, ExperienceAbout } from "./Experience";
import { Loader, useProgress } from "@react-three/drei";

export const Scene = ({ isAbout }) => {
  return (
    <>
      <div className="canvas-container">
        <Canvas shadows camera={{ position: [0, 0, -100], fov: 30 }}>
          {isAbout ? <ExperienceAbout /> : <Experience />}
          {/*<EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} mipmapBlur />
          </EffectComposer>*/}
        </Canvas>
        <Loader />
      </div>
    </>
  );
};
