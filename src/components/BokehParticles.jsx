import { BokehSinusoide, BokehAnimation } from "./Bokeh";

export const BokehParticles = () => {
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
          />

          <BokehAnimation
            key={1005 + i}
            position={[(i - 500) / 8, (Math.random() - 0.5) * 1, -90]}
          />
        </>
      ))}
    </mesh>
  );
};
