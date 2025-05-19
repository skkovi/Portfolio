"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: { value: "#ffffff" },
        },
        particles: {
          number: { value: 60 },
          color: { value: "#9ca3af" },
          links: {
            enable: true,
            color: "#9ca3af",
            distance: 150,
            opacity: 0.5,
          },
          move: { enable: true, speed: 1 },
          size: { value: 2 },
          opacity: { value: 0.7 },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
      }}
    />
  );
}
