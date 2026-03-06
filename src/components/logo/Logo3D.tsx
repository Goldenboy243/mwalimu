"use client";

import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

/* ─────────────────────────────────────
   Central Diamond (The Teacher / Seed)
   ───────────────────────────────────── */
function CentralDiamond() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={ref} rotation={[0, 0, Math.PI / 4]} castShadow>
      <octahedronGeometry args={[0.6, 0]} />
      <meshStandardMaterial
        color="#3B82F6"
        metalness={0.35}
        roughness={0.18}
        emissive="#2563EB"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

/* ─────────────────────────────────────
   Orbital Ring (solid torus)
   ───────────────────────────────────── */
interface RingProps {
  radius: number;
  tube: number;
  opacity: number;
  speed: number;
  tiltX: number;
  tiltZ: number;
}

function Ring({ radius, tube, opacity, speed, tiltX, tiltZ }: RingProps) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * speed;
  });

  return (
    <mesh ref={ref} rotation={[tiltX, 0, tiltZ]}>
      <torusGeometry args={[radius, tube, 32, 128]} />
      <meshStandardMaterial
        color="#3B82F6"
        transparent
        opacity={opacity}
        metalness={0.5}
        roughness={0.2}
        emissive="#3B82F6"
        emissiveIntensity={0.12}
      />
    </mesh>
  );
}

/* ─────────────────────────────────────
   Dotted outer orbit ring
   ───────────────────────────────────── */
function DottedRing() {
  const groupRef = useRef<THREE.Group>(null!);
  const dotCount = 48;

  useFrame((_, delta) => {
    groupRef.current.rotation.y += delta * 0.06;
  });

  return (
    <group ref={groupRef} rotation={[Math.PI / 2, 0, 0.1]}>
      {Array.from({ length: dotCount }).map((_, i) => {
        const angle = (i / dotCount) * Math.PI * 2;
        const r = 2.2;
        return (
          <mesh key={i} position={[Math.cos(angle) * r, Math.sin(angle) * r, 0]}>
            <sphereGeometry args={[0.018, 8, 8]} />
            <meshStandardMaterial color="#93C5FD" transparent opacity={0.3} />
          </mesh>
        );
      })}
    </group>
  );
}

/* ─────────────────────────────────────
   Glass shell (simplified)
   ───────────────────────────────────── */
function GlassShell() {
  return (
    <mesh>
      <sphereGeometry args={[2.6, 64, 64]} />
      <meshPhysicalMaterial
        color="#e0ecff"
        transparent
        opacity={0.06}
        roughness={0.1}
        metalness={0}
        clearcoat={0.3}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

/* ─────────────────────────────────────
   Bloom Scene (assembled logo)
   ───────────────────────────────────── */
function BloomScene() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    groupRef.current.rotation.y += delta * 0.12;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={groupRef}>
        <CentralDiamond />

        {/* Inner bold ring */}
        <Ring radius={1.4} tube={0.055} opacity={0.92} speed={0.25} tiltX={Math.PI / 2} tiltZ={0.2} />

        {/* Outer lighter ring */}
        <Ring radius={1.75} tube={0.035} opacity={0.35} speed={-0.18} tiltX={1.35} tiltZ={-0.3} />

        {/* Dotted boundary */}
        <DottedRing />

        {/* Glass shell */}
        <GlassShell />
      </group>
    </Float>
  );
}

/* ─────────────────────────────────────
   Exported Canvas Component
   ───────────────────────────────────── */
export default function Logo3D({ className }: { className?: string }) {
  return (
    <div className={className ?? "w-full h-[420px]"}>
      <Canvas
        camera={{ position: [0, 1.2, 6.5], fov: 36 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
        frameloop="always"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.4} castShadow />
        <pointLight position={[-4, -2, 3]} intensity={0.5} color="#60A5FA" />

        <BloomScene />

        <Suspense fallback={null}>
          <ContactShadows position={[0, -2.5, 0]} opacity={0.2} scale={10} blur={2.5} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
