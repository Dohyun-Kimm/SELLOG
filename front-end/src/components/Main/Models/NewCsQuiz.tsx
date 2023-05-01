/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/newCsQuiz.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Vert001: THREE.Mesh;
    Plane001: THREE.Mesh;
    Plane002: THREE.Mesh;
    Plane004: THREE.Mesh;
    Plane005: THREE.Mesh;
    Plane003: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cylinder003: THREE.Mesh;
    Cylinder004: THREE.Mesh;
    Plane006: THREE.Mesh;
    Roundcube002: THREE.Mesh;
    Circle: THREE.Mesh;
    Circle001: THREE.Mesh;
    Circle002: THREE.Mesh;
    Cube001: THREE.Mesh;
    Roundcube001: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
  };
};

type ActionName = "CubeAction" | "CameraAction.001" | "Roundcube.002Action";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function NewCsQuiz(props: JSX.IntrinsicElements["group"] | any) {
  const group = useRef<THREE.Group | any>();
  const { nodes, materials, animations } = useGLTF(
    "/models/newCsQuiz.glb"
  ) as GLTFResult;
  const { actions } = useAnimations<GLTFActions | any>(animations, group);

  return (
    <group ref={props.csquizRef} {...props} dispose={null} scale={0.3}>
      <group name="Scene" castShadow={true}>
        <group
          name="Area003"
          position={[6.96, 6.45, 6.2]}
          rotation={[-0.74, 0.69, 0.53]}
          castShadow={true}
        />
        <group
          name="Area"
          position={[-2.61, 7.24, -1.86]}
          rotation={[-1.72, -0.3, 0.07]}
          castShadow={true}
        />
        <group
          name="Area001"
          position={[2.88, 7.24, -12.69]}
          rotation={[-2.67, 0.2, 2.99]}
          castShadow={true}
        />
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          rotation={[0, -Math.PI / 2, 0]}
          castShadow={true}
        >
          <mesh
            name="Vert001"
            geometry={nodes.Vert001.geometry}
            material={materials["Material.001"]}
            position={[1, 1, 0]}
            castShadow={true}
          />
        </mesh>
        <mesh
          name="Plane001"
          geometry={nodes.Plane001.geometry}
          material={materials["Material.003"]}
          castShadow={true}
        />
        <mesh
          name="Plane002"
          geometry={nodes.Plane002.geometry}
          material={materials["Material.003"]}
          position={[0, 0, -3.7]}
          castShadow={true}
        />
        <mesh
          name="Plane004"
          geometry={nodes.Plane004.geometry}
          material={materials["Material.003"]}
          position={[3.73, 0, -7.4]}
          castShadow={true}
        />
        <mesh
          name="Plane005"
          geometry={nodes.Plane005.geometry}
          material={materials["Material.003"]}
          position={[7.46, 0, -7.4]}
          castShadow={true}
        />
        <mesh
          name="Plane003"
          geometry={nodes.Plane003.geometry}
          material={materials["Material.003"]}
          position={[2.69, 1.85, -11.14]}
          castShadow={true}
        />
        <mesh
          name="Cylinder002"
          geometry={nodes.Cylinder002.geometry}
          material={materials["Material.003"]}
          position={[-0.89, 0, -2.94]}
          rotation={[0, -0.61, 0]}
          castShadow={true}
        />
        <mesh
          name="Cylinder003"
          geometry={nodes.Cylinder003.geometry}
          material={materials["Material.003"]}
          position={[2.08, 1.85, -10.18]}
          rotation={[0, -0.61, 0]}
          castShadow={true}
        />
        <mesh
          name="Cylinder004"
          geometry={nodes.Cylinder004.geometry}
          material={materials["Material.003"]}
          position={[6.47, 0, -8.49]}
          rotation={[0, -0.61, 0]}
          castShadow={true}
        />
        <mesh
          name="Plane006"
          geometry={nodes.Plane006.geometry}
          material={materials["Material.007"]}
          position={[2.69, 0.97, -11.14]}
          scale={0.9}
          castShadow={true}
        />
        <mesh
          name="Roundcube002"
          geometry={nodes.Roundcube002.geometry}
          material={materials["Material.006"]}
          position={[7.32, 0.7, -7.04]}
          scale={0.61}
          castShadow={true}
        >
          <mesh
            name="Circle"
            geometry={nodes.Circle.geometry}
            material={materials["Material.001"]}
            position={[0, 2.16, 0.89]}
            rotation={[0.96, 0, 0]}
            scale={1.23}
            castShadow={true}
          />
          <mesh
            name="Circle001"
            geometry={nodes.Circle001.geometry}
            material={materials["Material.001"]}
            position={[1.41, 1.23, -0.66]}
            rotation={[Math.PI / 2, 0.61, -Math.PI / 2]}
            scale={0.98}
            castShadow={true}
          />
          <mesh
            name="Circle002"
            geometry={nodes.Circle002.geometry}
            material={materials["Material.001"]}
            position={[0, 0.92, -2.32]}
            rotation={[2.18, 0, Math.PI]}
            scale={1.21}
            castShadow={true}
          />
          <mesh
            name="Cube001"
            geometry={nodes.Cube001.geometry}
            material={materials["Material.005"]}
            position={[-0.33, 0.27, 0.93]}
            rotation={[-0.17, 0, 0]}
            castShadow={true}
          />
          <mesh
            name="Roundcube001"
            geometry={nodes.Roundcube001.geometry}
            material={materials["Material.004"]}
            position={[0, 0.65, -0.32]}
            rotation={[-0.41, -1.57, 0]}
            scale={1.16}
            castShadow={true}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/newCsQuiz.glb");
