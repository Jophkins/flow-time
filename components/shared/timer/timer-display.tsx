import React from 'react';

interface TimerDisplayProps {
    minutes: number;
    seconds: number;
    mode: 'session' | 'break';
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({ minutes, seconds, mode }) => (
    <>
        <h2 className="text-xl font-bold mb-2">
            {mode.charAt(0).toUpperCase() + mode.slice(1)}
        </h2>
        <div className="timer-display text-6xl font-bold mb-4">
            {/*{Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}*/}
            {/*{timeLeft % 60}*/}
            {`${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
        </div>
    </>
);