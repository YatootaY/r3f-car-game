import { KeyboardControls } from '@react-three/drei'
import './App.css'
import Experience from './Experience'
import { Canvas } from "@react-three/fiber"

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
          <fog attach="fog" color="#f79000" near={1} far={180} />
          <Experience/>
        </Canvas>
      </KeyboardControls>
    </>
  )
}

export default App
