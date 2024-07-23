import { Suspense } from "react";

import { Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";

export const Card = () => {
  return (
    <div className="absolute w-full h-full top-0 left-0">
      <Canvas style={{ pointerEvents: "none" }}>
        <Suspense>
          <Physics debug>
            <RigidBody colliders={"hull"} restitution={2} position={[0, 5, 0]}>
              <Sphere args={[1]} />
            </RigidBody>
            <CuboidCollider position={[0, -2, 0]} args={[100, 0.1, 100]} />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
};
