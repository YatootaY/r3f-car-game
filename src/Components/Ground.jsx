

const Ground = () => {

    return(
        <>
            <mesh scale={[5,0.2,5]} receiveShadow>
                <boxGeometry/>
                <meshStandardMaterial color="orange"/>
            </mesh>
        </>
    )
}

export default Ground