'use client';

import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import type { ISourceOptions } from "tsparticles-engine";

const DynamicBackground = () => {
  const bgEffect: string = 'rain';

  const particlesInit = useCallback(async (engine: Engine) => {
    try {
      await loadFull(engine);
    } catch (error) {
      console.error("Error loading tsparticles engine:", error);
    }
  }, []);

  const particlesOptions = (): ISourceOptions => {
    switch (bgEffect) {
      case 'snow':
        return {
          particles: {
            number: {
              value: 200,
            },
            size: {
              value: 3,
              animation: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
              },
            },
            move: {
              enable: true,
              direction: 'bottom',
              outModes: 'out',
              speed: 1,
            },
            opacity: {
              value: 0.7,
              animation: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            shape: {
              type: 'circle',
            },
          },
        };
      case 'rain':
        return {
          particles: {
            number: {
              value: 500,
            },
            shape: {
              type: 'line',
            },
            size: {
              value: 30, // Длина линий дождя
            },
            move: {
              enable: true,
              direction: 'bottom',
              speed: 60, // Скорость падения капель
              outModes: 'out',
            },
            color: {
              value: '#4a90e2',
            },
            opacity: {
              value: 0.5,
            },
            rotate: {
              value: {
                min: -60,
                max: -60,
              },
              animation: {
                enable: false,
              },
            },
            // Дополнительный параметр tilt для наклона линий
            tilt: {
              enable: true,
              value: {
                min: -15,
                max: -15,
              },
              animation: {
                enable: false,
              },
            },
          },
        };
      case 'sunlight':
        return {
          particles: {
            number: {
              value: 100,
            },
            size: {
                value: 5,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 1,
                  sync: false,
                },
            },
            move: {
              enable: true,
              direction: 'top-right',
              outModes: 'out',
              speed: 0.5,
            },
            opacity: {
                value: 0.3,
                animation: {
                  enable: true,
                  speed: 0.5,
                  minimumValue: 0.1,
                  sync: false,
                },
            },
            shape: {
              type: 'circle',
            },
            color: {
              value: '#ffdd57', // Желтый цвет для солнечного света
            },
          },
        };
      default:
        return {
          particles: {
            number: {
              value: 0, // No particles for 'none' or unsupported effects
            },
          },
        };
    }
  };

  return (
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Render Particles for selected background effect */}
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions()}
            className="absolute top-0 left-0 w-full h-full z-10"
        />
         {/*Background video for dynamic effects*/}
        <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/media/rainy-city.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео тег.
        </video>
      </div>
  );
};

export default DynamicBackground;
