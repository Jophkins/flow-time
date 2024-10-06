import React from 'react';
import {Button} from "@/components/ui/button";

interface TimerControlsProps {
    startTimer: () => void;
    resetTimer: () => void;
}

export const TimerControls: React.FC<TimerControlsProps> = ({ startTimer, resetTimer }) => (
    <div className="controls flex justify-around">
        <Button
            onClick={startTimer}
            className="px-4 py-2 mt-2 bg-green-500 rounded text-white"
        >
            Start
        </Button>
        <Button
            onClick={resetTimer}
            className="px-4 py-2 mt-2 bg-red-500 rounded text-white"
        >
            Reset
        </Button>
    </div>
);