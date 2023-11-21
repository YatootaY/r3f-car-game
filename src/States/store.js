
import { create } from "zustand";

const useStore = create((set) => ({
    audio: false,
    turnAudioOn: () => set(() => ({audio: true})),
    turnAudioOff: () => set(() => ({audio: false}))
}))

export default useStore