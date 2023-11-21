
export const playAudio = (e, audio) => {
    const impactStrength = e.contact.impactVelocity
    if (impactStrength < 1) {
        return
    }
    const normalizedImpactStrength = Math.min(1, impactStrength / 15);
    audio.currentTime = 0
    audio.volume = normalizedImpactStrength
    audio.play()
}