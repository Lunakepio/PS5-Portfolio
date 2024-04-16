import { GradientTexture, GradientType } from "@react-three/drei";

export const Background = () => {
  return (
    <mesh rotation={[0, Math.PI, Math.PI / 2]} position={[40, 10, 50]}>
      <planeGeometry args={[100, 225]} />
      <meshBasicMaterial>
        <GradientTexture
          type={GradientType.Radial}
          stops={[0, 1]}
          colors={["#292938", "#000011"]}
          size={1024}
        />
      </meshBasicMaterial>
    </mesh>
  );
};
