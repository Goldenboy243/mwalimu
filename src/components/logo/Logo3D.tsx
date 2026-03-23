"use client";

import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

// Replaced Blue (#3B82F6, #2563EB) with Indigo (#4f46e5, #4338ca)

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
        color="#4f46e5"
        metalness={0.35}
        roughness={0.18}
        emissive="#4338ca"
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
    ref.current.rotation.x = tiltX;
    ref.current.rotation.z = tiltZ;
    ref.current.rotation.y += delta * speed;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tube, 16, 100]} />
      <meshStandardMaterial
        color="#6366f1"
        metalness={0.4}
        roughness={0.2}
        transparent
        opacity={opacity}
      />
    </mesh>
  );
}

/* ─────────────────────────────────────
   Dotted Outer Ring (Students / Community)
   ───────────────────────────────────── */
function DottedRing() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    groupRef.current.rotation.y -= delta * 0.12;
    groupRef.current.rotation.x = Math.sin(delta * 0.2) * 0.1; 
  });

  const count = 18; // number of dots
  let rings = [];

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const radius = 2.2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    rings.push(
      <mesh key={i} position={[x, 0, z]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial
          color="#818cf8"
          emissive="#c7d2fe"
          emissiveIntensity={0.6}
          roughness={0.3}
        />
      </mesh>
    );
  }

  return <group ref={groupRef} rotation={[0.4, 0, 0.2]}>{rings}</group>;
}

/* ─────────────────────────────────────
   Glass Shell (Knowledge Bubble)
   ───────────────────────────────────── */
function GlassShell() {
  return (
    <mesh>
      <sphereGeometry args={[2.6, 64, 64]} />
      <meshPhysicalMaterial
        color="#e0e7ff"
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
function LogoScene() {
  return (
    <Float floatIntensity={1.5} rotationIntensity={0.4} speed={1.2}>
      <group>
        {/* Core */}
        <CentralDiamond />

        {/* Inner intense ring */}
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
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.25}
            penumbra={1}
            intensity={1.2}
            castShadow
          />
          <pointLight position={[-10, 5, -10]} intensity={0.8} color="#818cf8" />

          <LogoScene />

          <Environment preset="city" blur={0.8} />

          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -3.2, 0]}
            opacity={0.25}
            width={10}
            height={10}
            blur={1.5}
            far={4.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
