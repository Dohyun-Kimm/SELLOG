/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/red_telephone_1.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Plane040: THREE.Mesh;
    Circle016: THREE.Mesh;
    Circle011: THREE.Mesh;
    Circle011_1: THREE.Mesh;
    Circle018: THREE.Mesh;
    Plane041: THREE.Mesh;
  };
  materials: {
    ["Red Gloss"]: THREE.MeshStandardMaterial;
    Silver: THREE.MeshStandardMaterial;
    Black: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/items/red_telephone_1.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane040.geometry}
        material={materials["Red Gloss"]}
        position={[0.59, 2.73, -1.14]}
        rotation={[0, -0.71, 0]}
        scale={0.94}
      >
        <mesh
          geometry={nodes.Circle016.geometry}
          material={materials["Red Gloss"]}
          position={[-0.09, 0.41, 0]}
          scale={1.14}
        />
        <group
          position={[0.13, 0.31, 0]}
          rotation={[0.01, -0.01, -0.83]}
          scale={0.95}
        >
          <mesh
            geometry={nodes.Circle011.geometry}
            material={materials.Silver}
          />
          <mesh
            geometry={nodes.Circle011_1.geometry}
            material={materials.Silver}
          />
          <mesh
            geometry={nodes.Circle018.geometry}
            material={materials.Black}
            scale={1.11}
          />
        </group>
        <mesh geometry={nodes.Plane041.geometry} material={materials.Black} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/items/red_telephone_1.glb");
