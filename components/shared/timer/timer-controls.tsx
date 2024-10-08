import React from 'react';
import {Button} from "@/components/ui/button";

interface TimerControlsProps {
    startTimer: () => void,
    resetTimer: () => void,
    pauseTimer?: () => void,
    isPomodoroActive?: boolean
}

export const TimerControls: React.FC<TimerControlsProps> = ({
                                                                startTimer,
                                                                resetTimer,
                                                                pauseTimer,
                                                                isPomodoroActive
                                                            }) => (
    <div className="controls flex justify-around">
        {isPomodoroActive ?
            <Button variant="ghost" className="px-4 py-2 mt-2 rounded text-white"
                    onClick={pauseTimer}>Pause</Button> :
            <Button variant="ghost"
                    onClick={startTimer}
                    className="px-4 py-2 mt-2 rounded text-white"
            >
                Start
            </Button>}
        <Button variant="ghost"
            onClick={resetTimer}
            className="px-4 py-2 mt-2 rounded text-white"
        >
            Reset
        </Button>
    </div>
);