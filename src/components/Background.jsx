import { GradientTexture, GradientType } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Background = () => {
  const materialRef = useRef();

  useGSAP(() => {
    gsap.to(materialRef.current, {
      opacity: 1,
      duration: 2,
      delay: 4,
    });
  }, []);

  return (
    <mesh rotation={[0, Math.PI, Math.PI / 2]} position={[60, 10, 50]}>
      <planeGeometry args={[100, 305]} />
      <meshBasicMaterial opacity={0} transparent ref={materialRef}>
        <GradientTexture
          type={GradientType.Radial}
          stops={[0, 1]}
          colors={["#292938", "#000011"]}
          size={512}
        />
      </meshBasicMaterial>
    </mesh>
  );
};
