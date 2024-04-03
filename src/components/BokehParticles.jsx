import { Bokeh } from "./Bokeh";

export const BokehParticles = () => {

  
  return (
    <>
      {Array.from({ length: 1000 }).map((_, i) => (
        <Bokeh
          key={i}
          position={[
            (i - 500) / 8,
            (Math.sin(i * 0.007) * 10) + ((Math.random() - 0.5) * 10),
            (Math.cos(i * 0.007) * 10) + ((Math.random() - 0.5) * 10),

          ]}
        />
      ))}
    </>
  );
};

