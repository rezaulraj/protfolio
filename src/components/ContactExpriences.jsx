import { Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { ContactAvator } from "./ContactAvator";

const ContactExpriences = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
      }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[-5, 5, 5]} intensity={5} color={"#1c34ff"} />
      <group>
        <Text3D
          position={[-3, -3, -2]}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          height={0.5}
          bevelThickness={0.1}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1.5}
          font={"/fonts/Inter_Bold.json"}
        >
          {"hello\nRezaul"}
          <meshNormalMaterial />
        </Text3D>
        <ContactAvator scale={2.5} position={[0, -3, 0]} />
      </group>
    </Canvas>
  );
};

export default ContactExpriences;
