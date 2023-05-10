/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/orange_sofa_1.glb -t
*/

import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useRecoilState } from "recoil";
import { itemTargetState, myItemsState } from "@/recoil/myroom/atoms";
import { useFrame, useThree } from "@react-three/fiber";

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

export function Orange_sofa_1(props: JSX.IntrinsicElements["group"] | any) {
  const { nodes, materials } = useGLTF(
    "/models/items/orange_sofa_1.glb"
  ) as GLTFResult;

  const [propsX, propsY, propsZ] = props.position;
  const propsDeg = props.deg;

  // 좌표 (서버에 저장된 좌표로 수정하기)
  const [position, setPosition] = useState({ x: propsX, y: propsY, z: propsZ });
  const [isDragging, setIsDragging] = useState(false);

  // 회전 정보 (서버에 저장된 좌표로 수정하기)
  const [rotation, setRotation] = useState(propsDeg);

  // 타겟 정보
  const [target, setTarget] = useRecoilState(itemTargetState);

  const { scene, camera, gl } = useThree();
  const raycaster = new THREE.Raycaster();

  function intersect(pos: THREE.Vector2) {
    raycaster.setFromCamera(pos, camera);
    return raycaster.intersectObjects(scene.children);
  }

  const [myItems, setMyItems] = useRecoilState(myItemsState);

  const updateTagetItemPosition = (
    id: number,
    x: number,
    y: number,
    z: number,
    deg: number
  ) => {
    myItems.forEach((item, i) => {
      // itemId가 일치하는 아이템 선별
      if (item.itemId === id) {
        // 변화된 포지션 저장
        let newItemPosition = {
          ...item,
          x,
          y,
          z,
          deg,
        };
        // 불변성 유지를 위한 새로운 배열 생성
        const newItems = [...myItems];
        newItems[i] = newItemPosition;

        // 새로운 배열을 atom에 저장
        setMyItems(newItems);
      }
    });
  };

  useEffect(() => {
    const handleWindowClick = (e: MouseEvent) => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (props.activePage === "myitems") {
      gl.domElement.addEventListener("click", handleWindowClick);

      // atom에 변화된 포지션 저장
      updateTagetItemPosition(
        props.itemId,
        position.x,
        position.y,
        position.z,
        rotation
      );
    }

    return () => {
      if (props.activePage === "myitems") {
        gl.domElement.removeEventListener("click", handleWindowClick);
      }
    };
  }, [isDragging]);

  useFrame(({ mouse }) => {
    if (props.activePage === "myitems") {
      if (isDragging) {
        const found = intersect(mouse);

        if (found.length > 0) {
          for (let i = 0; i < found.length; i++) {
            if (!found[i].object.userData.ground) continue;

            // 물체가 마우스와 만난 지점으로 위치를 업데이트하기
            const newPosition = found[i].point;
            setPosition({ x: newPosition.x, y: position.y, z: newPosition.z });
            break;
          }
        }
      }
    }
  });

  // 물체 회전
  if (
    props.rotationLeftButtonRef.current &&
    props.rotationRigthButtonRef.current &&
    props.upButtonRef.current &&
    props.downButtonRef.current
  ) {
    const leftRotation = () => {
      let newRotation = (rotation - 10) % 360;
      setRotation(newRotation);
    };

    const rightRotation = () => {
      let newRotation = (rotation + 10) % 360;
      setRotation(newRotation);
    };

    const positionUp = () => {
      if (position.y < 3) {
        const newY = position.y + 0.2;
        setPosition({ x: position.x, y: newY, z: position.z });
      }
    };

    const positionDown = () => {
      if (position.y > -2.5) {
        const newY = position.y - 0.2;
        setPosition({ x: position.x, y: newY, z: position.z });
      }
    };

    if (target === "Orange_sofa_1") {
      props.rotationLeftButtonRef.current.addEventListener(
        "click",
        leftRotation
      );
      props.rotationRigthButtonRef.current.addEventListener(
        "click",
        rightRotation
      );
      props.upButtonRef.current.addEventListener("click", positionUp);
      props.downButtonRef.current.addEventListener("click", positionDown);
    } else {
      props.rotationLeftButtonRef.current.removeEventListener(
        "click",
        leftRotation
      );
      props.rotationRigthButtonRef.current.removeEventListener(
        "click",
        rightRotation
      );
    }
  }

  return (
    <group
      {...props}
      dispose={null}
      position={[position.x, position.y, position.z]}
      userData={{ draggable: true, name: "Orange_sofa_1" }}
      onClick={() => {
        if (props.activePage === "myitems") {
          if (!isDragging) setIsDragging(true);
          setTarget("Orange_sofa_1");
        }
      }}
      rotation={[0, THREE.MathUtils.degToRad(rotation), 0]}
    >
      <mesh geometry={nodes.Cube.geometry} material={materials.White} scale={1}>
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
