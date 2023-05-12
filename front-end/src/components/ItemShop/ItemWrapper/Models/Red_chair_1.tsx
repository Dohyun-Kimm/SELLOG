/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/red_chair_1.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Chair: THREE.Mesh;
    Circle001: THREE.Mesh;
    Plane047: THREE.Mesh;
    Vert008: THREE.Mesh;
  };
  materials: {
    metal: THREE.MeshStandardMaterial;
    black: THREE.MeshStandardMaterial;
    ["red.001"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/items/red_chair_1.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Chair.geometry}
        material={materials.metal}
        position={[0.01, 0.34, 0]}
        rotation={[0, 1.47, 0]}
        scale={0.11}
      >
        <mesh
          geometry={nodes.Circle001.geometry}
          material={materials.black}
          scale={9.45}
        />
        <mesh
          geometry={nodes.Plane047.geometry}
          material={materials["red.001"]}
          position={[0, 10.02, 0]}
          rotation={[0, -0.34, 0]}
          scale={10.29}
        >
          <mesh
            geometry={nodes.Vert008.geometry}
            material={materials.black}
            scale={0.92}
          />
        </mesh>
      </mesh>
    </group>
  );
}

// useGLTF.preload("/models/items/red_chair_1.glb");
