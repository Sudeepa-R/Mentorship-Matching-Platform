import React, { Component } from 'react';
import confetti from 'canvas-confetti';

class Celebration extends Component {
  componentDidMount() {
    // Trigger the confetti effect when the component is mounted
    this.launchConfetti();
  }

  launchConfetti = () => {
    // Create a confetti burst
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Repeat the confetti burst every 1 second
    this.interval = setInterval(() => {
      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 1000);
  };

  componentWillUnmount() {
    // Clear the confetti interval when the component unmounts
    clearInterval(this.interval);
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          background: 'transparent',
          position: 'absolute',
        }}
      >
        {/* Happy New Year Message */}
        <h1
          style={{
            position: 'absolute',
            top: '20%',
            left: '48%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '4rem',
            fontFamily: 'Roboto', // Stylish font
            // textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
            animation: 'slideDown 2s ease-in-out',
            zIndex: 2,
            // Green Border Effect
            WebkitTextStroke: '2px #537786', // Green border effect
            textStroke: '2px #537786', // For browsers supporting textStroke
            textShadow: '0 0 8px #537786, 0 0 10px #537786', // Green glow around the text
          }}
        >
          Happy New Year 2025 🎉
        </h1>

        {/* Balloons */}
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="balloon"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              background: `hsl(${Math.random() * 360}, 70%, 60%)`,
            }}
          />
        ))}

        <style>
          {`
          @keyframes slideDown {
            0% {
              transform: translate(-50%, -120%);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%);
            }
          }

          @keyframes floatUp {
            0% {
              transform: translateY(100%);
              opacity: 0.7;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateY(-200%);
              opacity: 0;
            }
          }

          .balloon {
            position: absolute;
            bottom: -10%;
            width: 40px;
            height: 60px;
            background: red;
            border-radius: 50% 50% 50% 50% / 60% 60% 100% 100%;
            box-shadow: inset -5px -10px rgba(0, 0, 0, 0.1);
            animation: floatUp 5s ease-in infinite; /* Faster animation */
          }

          .balloon::after {
            content: '';
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 20px;
            background: rgba(0, 0, 0, 0.3);
          }
          `}
        </style>
      </div>
    );
  }
}

export default Celebration;
