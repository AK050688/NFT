import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

const RotatingStone = () => {
  const meshRef = useRef();
  const texture = useTexture("/Images/stone3.png");

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 2]}>
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial
        map={texture}
        transparent={true}
        side={THREE.DoubleSide} // ✅ Show texture on both front and back
      />
    </mesh>
  );
};

const StoneScene = () => {
  return (
    <Canvas style={{ height: "100vh"}}>
      <ambientLight intensity={1} />
      <RotatingStone />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default StoneScene;
