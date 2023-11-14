import Body from "./Body"
import Wheel from "./Wheel"

const Vehicle = () => {

    

    return(
        <>
            <Body/>
            <Wheel position={[-0.6,0.3,0.75]}/>
            <Wheel position={[0.6,0.3,0.75]} left={true}/>
            <Wheel position={[-0.6,0.3,-0.55]}/>
            <Wheel position={[0.6,0.3,-0.55]} left={true}/>
        </>
    )
}

export default Vehicle