import './App.css'
import Experience from './Experience'
import { Canvas } from "@react-three/fiber"

function App() {

  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [2.5,4,6]
        }}
      >
        <Experience/>
      </Canvas>
    </>
  )
}

export default App
