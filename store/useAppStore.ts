import {create} from 'zustand';

interface AppState {
    backgroundEffect: 'none' | 'rain' | 'snow' | 'sunshine';
    pomodoroTime: number;
    isPomodoroActive: boolean;
    setBackgroundEffect: (effect: 'none' | 'rain' | 'snow' | 'sunshine') => void;
    setPomodoroTime: (time: number) => void;
    startPomodoro: () => void;
    stopPomodoro: () => void;
}

const useAppStore = create<AppState>((set) => ({
    backgroundEffect: 'none',
    pomodoroTime: 25,
    isPomodoroActive: false,
    setBackgroundEffect: (effect) => set({ backgroundEffect: effect }),
    setPomodoroTime: (time) => set({ pomodoroTime: time }),
    startPomodoro: () => set({ isPomodoroActive: true }),
    stopPomodoro: () => set({ isPomodoroActive: false }),
}));

export default useAppStore;
