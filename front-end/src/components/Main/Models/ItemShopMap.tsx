/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/itemshop.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Circle001: THREE.Mesh;
    Circle: THREE.Mesh;
    Vert: THREE.Mesh;
    Vert001: THREE.Mesh;
    Vert002: THREE.Mesh;
    Roundcube: THREE.Mesh;
    Roundcube001: THREE.Mesh;
    Roundcube002: THREE.Mesh;
    Roundcube003: THREE.Mesh;
    Roundcube004: THREE.Mesh;
    Roundcube005: THREE.Mesh;
  };
  materials: {
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
  };
};

export function ItemShopMap(props: JSX.IntrinsicElements["group"] | any) {
  const { nodes, materials } = useGLTF("/models/itemshop.glb") as GLTFResult;
  return (
    <group ref={props.itemshopRef} {...props} dispose={null} scale={2}>
      <mesh
        geometry={nodes.Circle001.geometry}
        material={materials["Material.004"]}
        rotation={[-Math.PI, 0.11, -Math.PI]}
        castShadow={true}
      >
        <mesh
          geometry={nodes.Circle.geometry}
          material={materials["Material.004"]}
          castShadow={true}
        />
        <mesh
          geometry={nodes.Vert.geometry}
          material={materials["Material.004"]}
          castShadow={true}
        />
        <mesh
          geometry={nodes.Vert001.geometry}
          material={materials["Material.004"]}
          position={[0, 0.39, 0.2]}
          castShadow={true}
        />
        <mesh
          geometry={nodes.Vert002.geometry}
          material={materials["Material.004"]}
          position={[0, 0.39, 0.2]}
          scale={[0.73, 0.86, 0.73]}
          castShadow={true}
        />
      </mesh>
      <mesh
        geometry={nodes.Roundcube.geometry}
        material={materials["Material.002"]}
        position={[-0.77, 0, 0.04]}
        scale={0.19}
        castShadow={true}
      />
      <mesh
        geometry={nodes.Roundcube001.geometry}
        material={materials["Material.002"]}
        position={[0.11, 0.43, 0.04]}
        scale={0.09}
        castShadow={true}
      />
      <mesh
        geometry={nodes.Roundcube002.geometry}
        material={materials["Material.003"]}
        position={[0.23, 0, 0.08]}
        scale={0.13}
        castShadow={true}
      />
      <mesh
        geometry={nodes.Roundcube003.geometry}
        material={materials["Material.005"]}
        position={[-0.44, 0, -0.33]}
        scale={0.14}
        castShadow={true}
      />
      <mesh
        geometry={nodes.Roundcube004.geometry}
        material={materials["Material.005"]}
        position={[-0.04, 0, -0.67]}
        scale={0.21}
        castShadow={true}
      />
      <mesh
        geometry={nodes.Roundcube005.geometry}
        material={materials["Material.003"]}
        position={[-0.8, 0, -0.68]}
        scale={0.09}
        castShadow={true}
      />
    </group>
  );
}
