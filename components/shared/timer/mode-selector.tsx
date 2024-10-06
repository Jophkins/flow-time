import React from 'react';
import {Button} from "@/components/ui/button";

interface ModeSelectorProps {
    mode: 'session' | 'shortBreak' | 'longBreak';
    handleModeChange: (newMode: 'session' | 'shortBreak' | 'longBreak') => void;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({ mode, handleModeChange }) => (
    <div className="mode-select mb-4 flex justify-around">
        <Button
            onClick={() => handleModeChange('shortBreak')}
            className={`${mode === 'shortBreak' ? 'bg-blue-500' : 'bg-gray-600'} px-3 py-1 rounded-md`}
        >
            Short Break
        </Button>
        <Button
            onClick={() => handleModeChange('longBreak')}
            className={`${mode === 'longBreak' ? 'bg-blue-500' : 'bg-gray-600'} px-3 py-1 rounded-md`}
        >
            Long Break
        </Button>
    </div>
);