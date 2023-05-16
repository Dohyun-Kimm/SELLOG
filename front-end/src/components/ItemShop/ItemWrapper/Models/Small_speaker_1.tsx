/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/small_speaker_1.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Plane080: THREE.Mesh;
    Plane081: THREE.Mesh;
  };
  materials: {
    black: THREE.MeshStandardMaterial;
    ["black-gloss"]: THREE.MeshStandardMaterial;
  };
};

export function Small_speaker_1(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/items/small_speaker_1.glb"
  ) as GLTFResult;
  return (
    <group
      {...props}
      dispose={null}
      scale={2.5}
      position={[0, -1.5, 0]}
      rotation={[0.2, -2.1, 0]}
    >
      <mesh geometry={nodes.Plane080.geometry} material={materials.black}>
        <mesh
          geometry={nodes.Plane081.geometry}
          material={materials["black-gloss"]}
        />
      </mesh>
    </group>
  );
}

// useGLTF.preload("/models/items/small_speaker_1.glb");