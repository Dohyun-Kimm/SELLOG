/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/elec_guitar_3.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Stand004: THREE.Mesh;
    Vert041: THREE.Mesh;
    Circle041: THREE.Mesh;
    Circle042: THREE.Mesh;
    Circle043: THREE.Mesh;
    Circle044: THREE.Mesh;
    Cylinder074: THREE.Mesh;
    Cylinder075: THREE.Mesh;
    Cylinder076: THREE.Mesh;
    Plane101: THREE.Mesh;
    Plane102: THREE.Mesh;
    Plane103: THREE.Mesh;
    Plane104: THREE.Mesh;
    Vert042: THREE.Mesh;
    Vert043: THREE.Mesh;
  };
  materials: {
    Black: THREE.MeshStandardMaterial;
    White: THREE.MeshStandardMaterial;
    Chrome: THREE.MeshStandardMaterial;
    ["Black.002"]: THREE.MeshStandardMaterial;
    Cream: THREE.MeshStandardMaterial;
    ["Metal.001"]: THREE.MeshStandardMaterial;
  };
};

export function Elec_guitar_3(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/items/elec_guitar_3.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Stand004.geometry}
        material={materials.Black}
        position={[-0.01, 1.49, -0.04]}
        rotation={[0, -0.36, 0]}
        scale={1.04}
      >
        <mesh
          geometry={nodes.Vert041.geometry}
          material={materials.White}
          position={[0.01, 1.15, 0]}
          rotation={[-Math.PI, 0, -1.8]}
          scale={1.12}
        >
          <mesh
            geometry={nodes.Circle041.geometry}
            material={materials.Chrome}
            position={[-0.58, 0.01, 0.16]}
          />
          <mesh
            geometry={nodes.Circle042.geometry}
            material={materials.Chrome}
            position={[-0.52, 0.01, 0.27]}
          />
          <mesh
            geometry={nodes.Circle043.geometry}
            material={materials.Chrome}
            position={[-0.71, 0.01, 0.15]}
          />
          <mesh
            geometry={nodes.Circle044.geometry}
            material={materials.Chrome}
            position={[-0.66, 0.01, 0.26]}
          />
          <mesh
            geometry={nodes.Cylinder074.geometry}
            material={materials.Chrome}
            position={[1.08, 0, -0.07]}
          />
          <mesh
            geometry={nodes.Cylinder075.geometry}
            material={materials.Chrome}
            position={[1.15, -0.01, -0.07]}
          />
          <mesh
            geometry={nodes.Cylinder076.geometry}
            material={materials.Chrome}
            position={[1.22, -0.01, -0.07]}
          />
          <mesh
            geometry={nodes.Plane101.geometry}
            material={materials["Black.002"]}
            position={[0.96, 0.03, 0]}
            rotation={[0, 0, -0.1]}
          />
          <mesh
            geometry={nodes.Plane102.geometry}
            material={materials.Chrome}
            position={[-0.14, 0.02, 0]}
          />
          <mesh
            geometry={nodes.Plane103.geometry}
            material={materials.Chrome}
            position={[-0.55, 0.02, 0]}
          />
          <mesh
            geometry={nodes.Plane104.geometry}
            material={materials.Chrome}
            position={[-0.46, 0.02, 0]}
          />
          <mesh
            geometry={nodes.Vert042.geometry}
            material={materials.Cream}
            position={[-0.27, 0.02, 0.13]}
          />
          <mesh
            geometry={nodes.Vert043.geometry}
            material={materials["Metal.001"]}
            position={[-0.46, 0.04, -0.06]}
          />
        </mesh>
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/items/elec_guitar_3.glb");
