/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/font/myroom_font.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_29: THREE.Mesh;
    Object_29001: THREE.Mesh;
    Object_30: THREE.Mesh;
    Object_30001: THREE.Mesh;
    Object_37: THREE.Mesh;
    Object_45: THREE.Mesh;
    Object_45001: THREE.Mesh;
    Object_46: THREE.Mesh;
    Object_46001: THREE.Mesh;
    Object_50: THREE.Mesh;
    Object_51: THREE.Mesh;
  };
  materials: {
    material_13: THREE.MeshStandardMaterial;
    material_10: THREE.MeshStandardMaterial;
    material_6: THREE.MeshStandardMaterial;
    material_4: THREE.MeshStandardMaterial;
  };
};

export function MyRoomFont(props: JSX.IntrinsicElements["group"] | any) {
  const { nodes, materials } = useGLTF(
    "/models/font/myroom_font.glb"
  ) as GLTFResult;
  return (
    <group ref={props.houseFontRef} {...props} dispose={null} scale={3}>
      <mesh
        geometry={nodes.Object_29.geometry}
        material={materials.material_13}
        position={[-0.03, 0.4, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow={true}
      />
      <mesh
        geometry={nodes.Object_29001.geometry}
        material={materials.material_13}
        position={[1.05, 0.4, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow={true}
      />
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials.material_13}
        position={[-0.03, 0.4, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow={true}
      />
      <mesh
        geometry={nodes.Object_30001.geometry}
        material={materials.material_13}
        position={[1.05, 0.4, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow={true}
      />
      <mesh
        geometry={nodes.Object_37.geometry}
        material={materials.material_10}
        position={[-0.22, 0.67, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow={true}
      />
      <mesh
        geometry={nodes.Object_45.geometry}
        material={materials.material_6}
        position={[0.24, 0.4, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow={true}
      />
      <mesh
        geometry={nodes.Object_45001.geometry}
        material={materials.material_6}
        position={[0.44, 0.4, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow={true}
      />
      <mesh
        geometry={nodes.Object_46.geometry}
        material={materials.material_6}
        position={[0.24, 0.4, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow={true}
      />
      <mesh
        geometry={nodes.Object_46001.geometry}
        material={materials.material_6}
        position={[0.44, 0.4, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow={true}
      />
      <mesh
        geometry={nodes.Object_50.geometry}
        material={materials.material_4}
        position={[-0.54, 0.39, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow={true}
      />
      <mesh
        geometry={nodes.Object_51.geometry}
        material={materials.material_4}
        position={[-0.54, 0.39, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow={true}
      />
    </group>
  );
}
