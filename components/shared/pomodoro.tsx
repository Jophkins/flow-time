'use client';

import React, {useState, useEffect} from 'react';
import timerStore from '@/store/timerStore';
import Draggable from 'react-draggable';
import { motion } from 'framer-motion';
import {ModeSelector, TimerControls, TimerDisplay} from "@/components/shared/timer";

const PomodoroTimer = () => {
    const { minutes, setMinutes  } = timerStore();
    const [mode, setMode] = useState<'session' | 'break'>('session');
    const [isBreak, setIsBreak] = useState<boolean>(false);
    const [seconds, setSeconds] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [isShortBreak, setIsShortBreak] = useState<boolean>(true);

    // const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;

        if (isRunning) {
            if (isBreak) {
                setMode('break');
            } else {
                setMode('session')
            };
            timer = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds === 0) {
                        if (minutes === 0) {
                            handleEnd();
                            return 0;
                        } else {
                            setMinutes(minutes - 1);
                            return 59;
                        }
                    } else {
                        return prevSeconds - 1;
                    }
                });
            }, 1000);
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [isRunning, minutes]);


    const handleEnd = () => {
        if (isBreak) {
            // new Audio(breakEndSound).play();
            setIsBreak(false);
            setMinutes(25);
        } else {
            // new Audio(timerEndSound).play();
            if (isShortBreak) {
                setMinutes(5);
            } else {
                setMinutes(15);
            }
            setIsBreak(true);
        }
        setSeconds(0);
        // setIsRunning(false);
    };

    const toggleTimer = () => {
        setIsRunning((prev) => !prev);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setMinutes(25);
        setSeconds(0);
    };



    return (
        <Draggable bounds="parent">
            <motion.div
                className="pomodoro-timer bg-gray-800 text-white p-6 rounded-lg shadow-lg z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ minWidth: '300px', textAlign: 'center' }}
            >
                {/* Timer control buttons: Start/Pause and Reset */}

                <ModeSelector isShortBreak={isShortBreak} setIsShortBreak={setIsShortBreak} />
                <TimerDisplay minutes={minutes} seconds={seconds} mode={mode} />
                <TimerControls resetTimer={resetTimer} isRunning={isRunning} toggleTimer={toggleTimer} />
            </motion.div>
        </Draggable>
    );
};

export default PomodoroTimer;