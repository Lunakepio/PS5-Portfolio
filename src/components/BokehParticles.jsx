import { useThree } from "@react-three/fiber";
import { BokehSinusoide, BokehAnimation } from "./Bokeh";

export const BokehParticles = ({ isAbout }) => {
  const { camera } = useThree();

  console.log(camera);

  return (
    <mesh rotation={[0, 0, -0.03]}>
      {Array.from({ length: 1000 }).map((_, i) => (
        <>
          <BokehSinusoide
            key={i}
            position={[
              (i - 500) / 8,
              Math.sin(i * 0.007) * 10 + (Math.random() - 0.5) * 10 - 5,
              Math.cos(i * 0.007) * 10 + (Math.random() - 0.5) * 80,
            ]}
            isAbout={isAbout}
          />

          {isAbout ? null : (
            <BokehAnimation
              key={1005 + i}
              position={[
                Math.random() - 0.5,
                Math.random() - 0.5,
                Math.random() * 10 - 95,
              ]}
            />
          )}
        </>
      ))}
    </mesh>
  );
};
