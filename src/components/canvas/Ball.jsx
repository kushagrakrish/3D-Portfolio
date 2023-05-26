import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={3.65}>
        <boxGeometry args={[1, 1, 1]} />{" "}
        {/* Use boxGeometry instead of icosahedronGeometry */}
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Apply the decal to each face of the cube */}
        <Decal
          position={[0, 0, 0]}
          map={decal}
          rotation={[0, 0, 0]}
          flatShading
        />
        <Decal
          position={[0, 0, 0]}
          map={decal}
          rotation={[0, Math.PI / 2, 0]}
          flatShading
        />
        <Decal
          position={[0, 0, 0]}
          map={decal}
          rotation={[0, Math.PI, 0]}
          flatShading
        />
        <Decal
          position={[0, 0, 0]}
          map={decal}
          rotation={[0, -Math.PI / 2, 0]}
          flatShading
        />
        <Decal
          position={[0, 0, 0]}
          map={decal}
          rotation={[Math.PI / 2, 0, 0]}
          flatShading
        />
        <Decal
          position={[0, 0, 0]}
          map={decal}
          rotation={[-Math.PI / 2, 0, 0]}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
