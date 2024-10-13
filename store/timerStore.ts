import {create} from 'zustand';

interface timerState {
    minutes: number;
    shortBreak: number;
    longBreak: number;
    setMinutes: (time: number) => void;
    // startPomodoro: () => void;
    // stopPomodoro: () => void;
    // startBreak: () => void;
    // stopBreak: () => void;
}

const timerStore = create<timerState>((set) => ({
    minutes: 1,
    shortBreak: 5,
    longBreak: 15,
    setMinutes: (time) => set({ minutes: time }),
    // startPomodoro: () => set({ isPomodoroActive: true }),
    // stopPomodoro: () => set({ isPomodoroActive: false }),
    // startBreak: () => set({ isBreakActive: true, isPomodoroActive: false }),
    // stopBreak: () => set({ isBreakActive: false }),
}));

export default timerStore;
