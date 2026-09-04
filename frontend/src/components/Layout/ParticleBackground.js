import React, { useEffect, useRef } from "react";

// Animated constellation: drifting dots joined by faint lines.
// Pure canvas - no extra npm packages needed.
const PARTICLE_COUNT = 30;
const LINK_DISTANCE = 150; // px - draw a line when two dots are closer than this
const DOT_COLOR = "107, 95, 107"; // muted mauve-grey (rgb)

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const parent = canvas.parentElement;

    const resize = () => {
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };

    const createParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5, // slow random drift
        vy: (Math.random() - 0.5) * 0.5,
        r: 1.8 + Math.random() * 1.4,
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // move dots
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        // bounce softly off the edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      // connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            const alpha = 0.16 * (1 - dist / LINK_DISTANCE);
            ctx.strokeStyle = `rgba(${DOT_COLOR}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // dots
      for (const p of particles) {
        ctx.fillStyle = `rgba(${DOT_COLOR}, 0.35)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(step);
    };

    resize();
    createParticles();
    step();

    const handleResize = () => {
      resize();
      createParticles();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

export default ParticleBackground;
