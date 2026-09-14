"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 34;
const CONNECT_DISTANCE = 3.4;
const GOLD_EVERY = 9;

function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function useNetwork() {
  return useMemo(() => {
    const random = seededRandom(7);
    const points: THREE.Vector3[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      points.push(
        new THREE.Vector3(
          (random() - 0.5) * 11,
          (random() - 0.5) * 8,
          (random() - 0.5) * 6
        )
      );
    }

    const edgePositions: number[] = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < CONNECT_DISTANCE) {
          edgePositions.push(
            points[i].x, points[i].y, points[i].z,
            points[j].x, points[j].y, points[j].z
          );
        }
      }
    }

    const nodePositions = new Float32Array(points.length * 3);
    const nodeColors = new Float32Array(points.length * 3);
    const cyan = new THREE.Color("#22d3ee");
    const gold = new THREE.Color("#f5b942");

    points.forEach((p, i) => {
      nodePositions.set([p.x, p.y, p.z], i * 3);
      const color = i % GOLD_EVERY === 0 ? gold : cyan;
      nodeColors.set([color.r, color.g, color.b], i * 3);
    });

    return {
      nodePositions,
      nodeColors,
      edgePositions: new Float32Array(edgePositions),
    };
  }, []);
}

function Network() {
  const group = useRef<THREE.Group>(null);
  const { nodePositions, nodeColors, edgePositions } = useNetwork();

  useFrame((_state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.035;
      group.current.rotation.x = Math.sin(Date.now() * 0.00005) * 0.08;
    }
  });

  return (
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[edgePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#2563eb" transparent opacity={0.25} />
      </lineSegments>

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nodePositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[nodeColors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export default function OrionScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
    >
      <Network />
    </Canvas>
  );
}
