/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/old_computer_2.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Keyboard001: THREE.Mesh;
    Plane018: THREE.Mesh;
    PC002: THREE.Mesh;
    Plane035: THREE.Mesh;
    Plane036: THREE.Mesh;
    Plane037: THREE.Mesh;
    Plane010: THREE.Mesh;
    Plane010_1: THREE.Mesh;
    Plane016: THREE.Mesh;
    Plane016_1: THREE.Mesh;
    Cable002: THREE.Mesh;
  };
  materials: {
    ["computer-beige"]: THREE.MeshStandardMaterial;
    grey: THREE.MeshStandardMaterial;
    black: THREE.MeshStandardMaterial;
    red: THREE.MeshStandardMaterial;
    led: THREE.MeshStandardMaterial;
    ["screen-nc"]: THREE.MeshStandardMaterial;
  };
};

export function Old_computer_2(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/items/old_computer_2.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Keyboard001.geometry}
        material={materials["computer-beige"]}
        position={[0.34, 1.83, 0.42]}
        rotation={[0, 0.63, 0]}
        scale={1.25}
      >
        <mesh
          geometry={nodes.Plane018.geometry}
          material={materials.grey}
          position={[-0.04, 0.05, 0.03]}
          rotation={[0.08, 0, 0]}
        />
      </mesh>
      <mesh
        geometry={nodes.PC002.geometry}
        material={materials["computer-beige"]}
        position={[-0.62, 1.82, -0.47]}
        rotation={[0, 0.92, 0]}
        scale={1.25}
      >
        <mesh
          geometry={nodes.Plane035.geometry}
          material={materials["computer-beige"]}
        />
        <mesh
          geometry={nodes.Plane036.geometry}
          material={materials.black}
          position={[0, 0, -0.09]}
        />
        <mesh
          geometry={nodes.Plane037.geometry}
          material={materials.red}
          position={[0.42, 0.2, 0.44]}
          rotation={[-0.16, 0, 0]}
        />
        <group position={[-0.47, 0.12, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Plane010.geometry}
            material={materials["computer-beige"]}
          />
          <mesh geometry={nodes.Plane010_1.geometry} material={materials.led} />
        </group>
        <group position={[-0.42, 0.12, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Plane010.geometry}
            material={materials["computer-beige"]}
          />
          <mesh geometry={nodes.Plane010_1.geometry} material={materials.led} />
        </group>
        <group position={[0.02, 0.32, 0.06]} scale={1.24}>
          <mesh
            geometry={nodes.Plane016.geometry}
            material={materials["computer-beige"]}
          />
          <mesh
            geometry={nodes.Plane016_1.geometry}
            material={materials["screen-nc"]}
          />
        </group>
      </mesh>
      <mesh
        geometry={nodes.Cable002.geometry}
        material={materials["computer-beige"]}
        position={[0.22, 1.87, 0.2]}
      />
    </group>
  );
}

// useGLTF.preload("/models/items/old_computer_2.glb");