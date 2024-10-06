'use client';

import React, { useState, useEffect } from 'react';
import useAppStore from '@/store/useAppStore';
import Draggable from 'react-draggable';
import { motion } from 'framer-motion';
import {ModeSelector, TimerControls, TimerDisplay} from "@/components/shared/timer";

const PomodoroTimer = () => {
    const { pomodoroTime, isPomodoroActive, setPomodoroTime, startPomodoro, stopPomodoro } = useAppStore();
    const [timeLeft, setTimeLeft] = useState(pomodoroTime * 60);
    const [mode, setMode] = useState<'session' | 'shortBreak' | 'longBreak'>('session');

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (isPomodoroActive) {
            timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 0) {
                        clearInterval(timer!);
                        stopPomodoro();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else if (timer) {
            clearInterval(timer);
        }
        return () => timer && clearInterval(timer);
    }, [isPomodoroActive, stopPomodoro]);

    const startTimer = () => {
        setPomodoroTime(timeLeft / 60);
        startPomodoro();
    };

    const resetTimer = () => {
        stopPomodoro();
        setTimeLeft(pomodoroTime * 60);
    };

    const handleModeChange = (newMode: 'session' | 'shortBreak' | 'longBreak') => {
        setMode(newMode);
        if (newMode === 'shortBreak') {
            setTimeLeft(5 * 60); // Short break: 5 minutes
        } else if (newMode === 'longBreak') {
            setTimeLeft(15 * 60); // Long break: 15 minutes
        } else {
            setTimeLeft(pomodoroTime * 60); // Session time
        }
        stopPomodoro();
    };

    return (
        <Draggable bounds="parent">
            <motion.div
                className="pomodoro-timer bg-gray-800 text-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ maxWidth: '300px', textAlign: 'center' }}
            >
                <ModeSelector mode={mode} handleModeChange={handleModeChange} />
                <TimerDisplay timeLeft={timeLeft} mode={mode} />
                <TimerControls startTimer={startTimer} resetTimer={resetTimer} />
            </motion.div>
        </Draggable>
    );
};

export default PomodoroTimer;