import React from 'react';
import {Button} from "@/components/ui/button";

interface TimerControlsProps {
    resetTimer: () => void,
    toggleTimer: () => void,
    isRunning: boolean,
}

export const TimerControls: React.FC<TimerControlsProps> = ({
                                                                toggleTimer,
                                                                resetTimer,
                                                                isRunning
                                                            }) => (
    <div className="controls flex justify-around">
        {isRunning ?
            <Button variant="ghost" className="px-4 py-2 mt-2 rounded text-white"
                    onClick={toggleTimer}>Pause</Button> :
            <Button variant="ghost"
                    onClick={toggleTimer}
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