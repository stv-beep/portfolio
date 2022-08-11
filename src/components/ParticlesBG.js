import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBG() {
  const particlesInit = async (main) => {

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      className="particles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: "#373737",
          position: "center",
          repeat: "no-repeat",
        },
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        fpsLimit: 144,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 25,
              duration: 0.1,
            },
          },
        },
        particles: {
          color: {
            value: "#C3C3C3",
          },
          links: {
            color: "#fff",
            distance: 250,
            enable: true,
            opacity: 0.6,
            width: 2,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.25,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 60, /* number of lines */
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "triangle",
          },
          size: {
            value: { min: 1, max: 1 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}