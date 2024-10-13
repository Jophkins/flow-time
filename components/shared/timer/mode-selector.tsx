import React from 'react';
import {Button} from "@/components/ui/button";

interface ModeSelectorProps {
    isShortBreak: boolean;
    setIsShortBreak: (mode: boolean) => void;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({ isShortBreak, setIsShortBreak }) => (
    <div className="mode-select mb-4 flex justify-around">
        <Button
            onClick={() => setIsShortBreak(true)}
            className={`${isShortBreak ? 'bg-blue-500' : 'bg-gray-600'} px-3 py-1 rounded-md`}
        >
            Short Break
        </Button>
        <Button
            onClick={() => setIsShortBreak(false)}
            className={`${!isShortBreak ? 'bg-blue-500' : 'bg-gray-600'} px-3 py-1 rounded-md`}
        >
            Long Break
        </Button>
    </div>
);