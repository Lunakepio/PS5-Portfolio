import { useRef, useState, useEffect, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFrame, useLoader } from "@react-three/fiber";
import { useAppStore } from "../store";
import { Instance } from "@react-three/drei";

export function BokehSinusoidal(instance) {
  const ref = useRef();
  const { opacityTrigger } = useAppStore();
  const { visualProperty, isAbout } = instance;

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.set(Math.PI, 0, 0);
      ref.current.position.set(
        visualProperty.position[0],
        visualProperty.position[1],
        visualProperty.position[2],
      );
      ref.current.color.set(visualProperty.color);
    }
  }, [ref.current]);

  useGSAP(() => {
    if (opacityTrigger) {
      gsap.set(ref.current.scale, {
        x: visualProperty.scale,
        z: visualProperty.scale,
        y: visualProperty.scale,
      });
      gsap.to(ref.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: Math.random() * 2,
      });
    } else {
      gsap.fromTo(
        ref.current.scale,
        {
          x: 0,
          y: 0,
          z: 0,
        },
        {
          x: visualProperty.scale,
          z: visualProperty.scale,
          y: visualProperty.scale,
          duration: Math.random() * 1 + 1,
          delay: isAbout ? Math.random() : Math.random() * 10 + 5,
        },
      );
    }
  }, [opacityTrigger]);

  useFrame((state, delta) => {
    ref.current.position.x +=
      visualProperty.directionX * visualProperty.speed * delta;
    ref.current.position.y +=
      visualProperty.directionY * visualProperty.speed * delta;
    ref.current.position.z +=
      visualProperty.directionZ * visualProperty.speed * delta;
  });

  return (
    <group>
      <Instance ref={ref} />
    </group>
  );
}

export function BokehAnimation(instance) {
  const ref = useRef();
  const { visualProperty } = instance;
  const [isTimeoutEnd, setIsTimeoutEnd] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsTimeoutEnd(true);
    }, 4000);
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.set(Math.PI, 0, 0);
      ref.current.position.set(
        visualProperty.position[0],
        visualProperty.position[1],
        visualProperty.position[2],
      );
      ref.current.color.set(visualProperty.color);
    }
  }, [ref.current]);

  useGSAP(() => {
    if (!isTimeoutEnd) return;

    gsap.fromTo(
      ref.current.scale,
      {
        x: visualProperty.scale * 12,
        y: visualProperty.scale * 12,
        z: visualProperty.scale * 12,
      },
      {
        x: visualProperty.scale / 5,
        y: visualProperty.scale / 5,
        z: visualProperty.scale / 5,
        duration: 0.5,
        delay: 0.7,
        ease: "circ.inOut",
      },
    );
  }, [isTimeoutEnd]);

  useFrame((state, delta) => {
    if (isTimeoutEnd) {
      ref.current.position.x +=
        visualProperty.directionX * visualProperty.speed * delta * 100;
      ref.current.position.y +=
        visualProperty.directionY * visualProperty.speed * delta * 100;
      ref.current.position.z +=
        visualProperty.directionZ * visualProperty.speed * delta * 100;
    }
  });

  return (
    <mesh>
      <Instance ref={ref} />
    </mesh>
  );
}
