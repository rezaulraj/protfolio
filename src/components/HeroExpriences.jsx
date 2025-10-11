import { Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { HeroBoy } from "./HeroBoy";

const HeroExpriences = () => {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[-2, 0, 3]} intensity={3} color={"#ff28d5"} />
      <directionalLight position={[2, 0, 3]} intensity={3} color={"#1c34ff"} />

      <Sparkles
        count={100}
        size={2}
        speed={0.5}
        color={"pink"}
        scale={[10, 10, 2]}
      />
      <group>
        <HeroBoy scale={9} position={[0, -15, 0]} />
      </group>
    </Canvas>
  );
};

export default HeroExpriences;
