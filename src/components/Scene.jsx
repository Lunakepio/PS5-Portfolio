import { Canvas } from "@react-three/fiber";
import { Experience, ExperienceAbout } from "./Experience";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useAppStore } from "../store";

export const Scene = ({ isAbout }) => {
  const { isMessageShow } = useAppStore();

  return (
    <>
      <div className="canvas-container">
        <Canvas shadows camera={{ position: [0, 0, -100], fov: 30 }}>
          <color attach="background" args={["#000011"]} />
          {isAbout ? <ExperienceAbout /> : <Experience />}
          <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} mipmapBlur />
          </EffectComposer>
        </Canvas>
      </div>
    </>
  );
};
