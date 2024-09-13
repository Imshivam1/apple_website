import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import * as THREE from 'three'
import Lights from "./Lights";
import Iphone from "./Iphone";
import { Suspense } from "react";

const ModelView = ({index, groupRef, gsapType, controlRef, setRotationSize, size, item}) => {
  return (
    <View
        index={0}
        id={gsapType}
        className={`w-full h-full absolute
         ${index === 2 ? 'right-[-100%]' : ''}`}>

            {/*Ambient light */}
            
            <ambientLight intensity={0.3} />

            <PerspectiveCamera makeDefault position={[0,0,4]}/>
            <Lights />

            <OrbitControls 
            makeDefault
            ref={controlRef}
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.5}
            target={new THREE.Vector3(0,0,0)}
            onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
            />

            <group ref={groupRef} name={`${index === 1} ? 'small' : 'large`} position={[0, 0 ,0]}>
            <Suspense fallback = {<html><div>Loading</div></html>}>
            <Iphone 
            scale={index=== 1 ? [15,15,15] : [17,17,17]}
            />
            </Suspense>
            </group>
    </View>
  )
}

export default ModelView