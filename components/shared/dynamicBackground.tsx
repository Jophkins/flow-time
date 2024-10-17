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
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              },
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
            move: {
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              },
              bounce: false,
              direction: "bottom",
              enable: true,
              outMode: "out",
              random: true,
              speed: 30,
              straight: true
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              limit: 0,
              value: 200
            },
            opacity: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 1,
                sync: false
              },
              random: false,
              value: 0.5
            },
            shape: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "2",
                weight: "400"
              },
              image: [],
              polygon: {
                nb_sides: 5
              },
              stroke: {
                color: "#efefefee",
                width: 10
              },
              type: "line"
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                sync: false
              },
              random: false,
              value: 0.2
            }
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
        {/*<video*/}
        {/*    autoPlay*/}
        {/*    loop*/}
        {/*    muted*/}
        {/*    className="absolute top-0 left-0 w-full h-full object-cover z-0"*/}
        {/*>*/}
        {/*  <source src="/media/rainy-city.mp4" type="video/mp4" />*/}
        {/*  Your browser doesn&#39;t support this tag*/}
        {/*</video>*/}
      </div>
  );
};

export default DynamicBackground;
