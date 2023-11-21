import audioOn from "../assets/audio-on.svg"
import audioOff from "../assets/audio-off.svg"
import useStore from "../States/store"

const Interface = () => {

    const {audio, turnAudioOn, turnAudioOff} = useStore()

    const handleClick = () => {
        if(audio){
            turnAudioOff()
        }else{
            turnAudioOn()
        }
    }

    return(
        <div className="interface">
            <img src={audio ? audioOn : audioOff} alt="audio" onClick={handleClick}/>
        </div>
    )
}

export default Interface