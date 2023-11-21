import { KeyboardControls, Loader } from '@react-three/drei'
import './App.css'
import Experience from './Experience'
import { Canvas } from "@react-three/fiber"
import { Suspense } from 'react'

function App() {

  return (
    <>
      <KeyboardControls
        map= {[
          {name: "forward", keys: ["ArrowUp", "KeyW"]},
          {name: "backward", keys: ["ArrowDown", "KeyS"]},
          {name: "leftward", keys: ["ArrowLeft", "KeyA"]},
          {name: "rightward", keys: ["ArrowRight", "KeyD"]},
          {name: "boost", keys: ["Shift"]},
          {name: "brake", keys: ["Space"]}
        ]}
      >
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200
          }}
        >
          <fog attach="fog" color="#efb35f" near={1} far={180} />
          <Suspense fallback={null}>
            <Experience/>
          </Suspense>
        </Canvas>
        <Loader
          containerStyles={{"background-color": "#efb35f"}}
        />
      </KeyboardControls>
    </>
  )
}

export default App
