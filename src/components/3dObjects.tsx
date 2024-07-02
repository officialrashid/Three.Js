import { useEffect, useRef } from "react";
import { useFrame } from '@react-three/fiber';
const ThreeDObjects = ({object}:any) => {

    useFrame(() => {
        if (object.isRotating && meshRef.current) {
            meshRef.current.rotation.x += object.speed;
            meshRef.current.rotation.y += object.speed;
          }
      });


  useEffect(() => {
    if (!object.isVisible && meshRef.current) {
      meshRef.current.visible = false;
    } else if (meshRef.current) {
      meshRef.current.visible = true;
    }
  }, [object.isVisible]);

   
    const meshRef:any = useRef();

    let geometry;
    switch (object.geometry) {
      case 'box':
        geometry = <boxGeometry args={[1.5, 1.5, 1.5]} />;
        break;
      case 'torus':
        geometry = <torusGeometry args={[1, 0.5, 16, 100]}/>;
        break;
      case 'dode':
        geometry = <dodecahedronGeometry args={[0.95]} />;
        break;
      default:
        geometry = <boxGeometry args={[1, 1, 1]} />;
    }

  

        



return object.isVisible ? (
    <mesh position={object.position} ref={meshRef} >
      {geometry}
      <meshNormalMaterial  />
    </mesh>
  ) : null;

        
      
        
   
    
}

export default ThreeDObjects;
