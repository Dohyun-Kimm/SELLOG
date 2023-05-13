/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/orange_sofa_1.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Cushion: THREE.Mesh;
    Cushion001: THREE.Mesh;
    Cushion002: THREE.Mesh;
    Cushion003: THREE.Mesh;
    Plane001: THREE.Mesh;
    Plane001_1: THREE.Mesh;
    Blanket002: THREE.Mesh;
  };
  materials: {
    White: THREE.MeshStandardMaterial;
    Pillow: THREE.MeshStandardMaterial;
    Beige: THREE.MeshStandardMaterial;
    Green: THREE.MeshStandardMaterial;
    Orange: THREE.MeshStandardMaterial;
  };
};

export function Orange_sofa_1(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/items/orange_sofa_1.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.White}
        position={[0.02, 0, -0.02]}
        rotation={[0, 0.03, 0]}
        scale={1.36}
      >
        <mesh
          geometry={nodes.Cushion.geometry}
          material={materials.Pillow}
          position={[0.18, 0.78, 1.04]}
          rotation={[0.12, 0.38, -0.51]}
        />
        <mesh
          geometry={nodes.Cushion001.geometry}
          material={materials.Pillow}
          position={[0.07, 0.69, -0.57]}
          rotation={[0.07, 0.15, -0.68]}
          scale={0.74}
        />
        <mesh
          geometry={nodes.Cushion002.geometry}
          material={materials.Pillow}
          position={[0.15, 0.65, -1.11]}
          rotation={[0.28, -1.13, -0.21]}
          scale={1.02}
        />
        <mesh
          geometry={nodes.Cushion003.geometry}
          material={materials.Pillow}
          position={[0.18, 0.74, 0.6]}
          rotation={[-0.19, 0.57, -0.65]}
          scale={0.74}
        />
        <group position={[-0.25, 1.74, 0]}>
          <mesh
            name="Plane001"
            geometry={nodes.Plane001.geometry}
            material={materials.Beige}
            morphTargetDictionary={nodes.Plane001.morphTargetDictionary}
            morphTargetInfluences={nodes.Plane001.morphTargetInfluences}
          />
          <mesh
            name="Plane001_1"
            geometry={nodes.Plane001_1.geometry}
            material={materials.Green}
            morphTargetDictionary={nodes.Plane001_1.morphTargetDictionary}
            morphTargetInfluences={nodes.Plane001_1.morphTargetInfluences}
          />
        </group>
        <mesh
          name="Blanket002"
          geometry={nodes.Blanket002.geometry}
          material={materials.Orange}
          morphTargetDictionary={nodes.Blanket002.morphTargetDictionary}
          morphTargetInfluences={nodes.Blanket002.morphTargetInfluences}
          position={[-0.11, 1.69, 0.85]}
        />
      </mesh>
    </group>
  );
}

// useGLTF.preload("/models/items/orange_sofa_1.glb");
