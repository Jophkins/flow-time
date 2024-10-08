import {create} from 'zustand';

interface appState {
    backgroundEffect: 'none' | 'rain' | 'snow' | 'sunshine';
    setBackgroundEffect: (effect: 'none' | 'rain' | 'snow' | 'sunshine') => void;
}

const appStore = create<appState>((set) => ({
    backgroundEffect: 'none',
    setBackgroundEffect: (effect) => set({ backgroundEffect: effect }),
}));

export default appStore;