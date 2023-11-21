
export const playAudio = (e, audio) => {
    const impactStrength = e.contact.impactVelocity
    if (impactStrength < 1) {
        return
    } 
    audio.currentTime = 0
    audio.volume = Math.random()
    audio.play()
}