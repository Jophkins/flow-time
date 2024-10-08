import dynamic from 'next/dynamic';

const PomodoroTimer = dynamic(() => import('../components/shared/pomodoro'), { ssr: false });

export default function Home() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-900 gap-3">
                <h1 className="text-4xl text-white font-bold">flowTime!</h1>
                    <PomodoroTimer/>
            </div>
        </>
    );
}

