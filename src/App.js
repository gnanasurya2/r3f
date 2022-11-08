import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import "./styles.css";

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {},
  // Vertex Shader
  glsl``,
  // Fragment Shader
  glsl``
);

extend({ WaveShaderMaterial });

const Wave = () => {
  return (
    <mesh>
      <planeBufferGeometry args={[0.6, 0.8, 13, 13]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ fov: 18, position: [0, 0, 5] }}>
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Wave />
      </Suspense>
    </Canvas>
  );
};

const App = () => {
  return (
    <>
      <Scene />
    </>
  );
};

export default App;
