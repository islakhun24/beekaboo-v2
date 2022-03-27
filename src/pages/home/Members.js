import person1 from '../../assets/svg/person1.svg';
import person2 from '../../assets/svg/person2.svg';
import person3 from '../../assets/svg/person3.svg';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../../components/3d/Sunny_dance_Xmas';
const Members = ()=>{
    return (
        <div style={{fontFamily:'Sniglet'}} className="items-center p-8 w-screen flex flex-col">
          <h3 className="text-center font-normal text-6xl">Family Members of Beekaboo</h3>
          <div className="w-full mt-24 grid xl:grid-cols-3 2xl:grid-cols-3 lg: grid-cols-1 gap-4">
            <div className="col-span-1 space-y-4 items-center flex flex-col text-4xl">
            <Canvas
             camera={{ position: [2, 0, 12.25], fov: 15 }}
              >
                <ambientLight intensity={0.1} />
                <ambientLight intensity={0.1} />
                <directionalLight intensity={1} />
                <Model position={[-10, -9, -70]} />
                {/* <Suspense fallback={null}>
                    <Model position={[0.025, -0.9, 1]} />
                </Suspense> */}
                <OrbitControls enableRotate={false} zoom0={3} enableZoom={false} />
          </Canvas>
              <div>Name</div>
            </div>
            <div className="col-span-1 space-y-4 items-center flex flex-col text-4xl">
            <Canvas
             camera={{ position: [2, 0, 12.25], fov: 15 }}
              >
                <ambientLight intensity={0.1} />
                <ambientLight intensity={0.1} />
                <directionalLight intensity={1} />
                <Model position={[-10, -9, -70]} />
                {/* <Suspense fallback={null}>
                    <Model position={[0.025, -0.9, 1]} />
                </Suspense> */}
                <OrbitControls enableRotate={false} zoom0={3} enableZoom={false} />
          </Canvas>
              <div>Name</div>
            </div>
            <div className="col-span-1 space-y-4 items-center flex flex-col text-4xl">
            <Canvas
             camera={{ position: [2, 0, 12.25], fov: 15 }}
              >
                <ambientLight intensity={0.1} />
                <ambientLight intensity={0.1} />
                <directionalLight intensity={1} />
                <Model position={[-10, -9, -70]} />
                {/* <Suspense fallback={null}>
                    <Model position={[0.025, -0.9, 1]} />
                </Suspense> */}
                <OrbitControls enableRotate={false} zoom0={3} enableZoom={false} />
          </Canvas>
              <div>Name</div>
            </div>
          </div>
      </div>
    )
}

export default Members