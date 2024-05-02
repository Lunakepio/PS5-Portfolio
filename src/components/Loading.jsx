import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

export const Loading = ({ setCanShow }) => {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) setCanShow(true);
  }, [progress]);

  return <section className="loading"></section>;
};
