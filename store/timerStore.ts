import {create} from 'zustand';

interface timerState {
    pomodoroTime: number;
    isPomodoroActive: boolean;
    isBreakActive: boolean;
    shortBreak: number;
    longBreak: number;
    setPomodoroTime: (time: number) => void;
    startPomodoro: () => void;
    stopPomodoro: () => void;
    startBreak: () => void;
    stopBreak: () => void;
}

const timerStore = create<timerState>((set) => ({
    pomodoroTime: 1,
    shortBreak: 1,
    longBreak: 10,
    isPomodoroActive: false,
    isBreakActive: false,
    setPomodoroTime: (time) => set({ pomodoroTime: time }),
    startPomodoro: () => set({ isPomodoroActive: true }),
    stopPomodoro: () => set({ isPomodoroActive: false }),
    startBreak: () => set({ isBreakActive: true, isPomodoroActive: false }),
    stopBreak: () => set({ isBreakActive: false }),
}));

export default timerStore;
