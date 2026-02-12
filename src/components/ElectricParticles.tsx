"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function prng(i: number) {
  const x = Math.sin(i * 127.1) * 43758.5453123;
  return x - Math.floor(x);
}

function Particles({ count = 900 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      arr[i3] = (prng(i + 1) - 0.5) * 18;
      arr[i3 + 1] = (prng(i + 2) - 0.5) * 12;
      arr[i3 + 2] = (prng(i + 3) - 0.5) * 12;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.03;
      ref.current.rotation.x = Math.sin(t * 0.15) * 0.03;
    }
  });

  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#00F5FF"
          size={0.035}
          sizeAttenuation
          depthWrite={false}
          opacity={0.22}
        />
      </Points>
    </group>
  );
}

export function ElectricParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.6} />
        <Particles />
      </Canvas>
    </div>
  );
}
