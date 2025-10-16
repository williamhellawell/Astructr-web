import { useEffect, useRef } from "react";

export const DataVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;

    // Particle class
    class Particle {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      initialX: number;
      initialY: number;
      size: number;
      color: string;
      speed: number;
      phase: number;

      constructor() {
        // Start scattered on the left
        this.initialX = Math.random() * 300;
        this.initialY = Math.random() * 600;
        this.x = this.initialX;
        this.y = this.initialY;
        
        // Target is organized grid on the right
        this.targetX = 500 + (Math.random() * 250);
        this.targetY = 100 + (Math.random() * 400);
        
        this.size = 4 + Math.random() * 4;
        this.color = "#3683FF";
        this.speed = 0.02 + Math.random() * 0.01;
        this.phase = 0;
      }

      update() {
        this.phase += this.speed;
        const progress = Math.min(1, this.phase);
        const eased = this.easeInOutCubic(progress);
        
        this.x = this.initialX + (this.targetX - this.initialX) * eased;
        this.y = this.initialY + (this.targetY - this.initialY) * eased;
      }

      easeInOutCubic(t: number): number {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      // Draw connections between nearby organized particles
      particles.forEach((p1, i) => {
        if (p1.phase > 0.8) {
          particles.slice(i + 1).forEach(p2 => {
            if (p2.phase > 0.8) {
              const dx = p1.x - p2.x;
              const dy = p1.y - p2.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 80) {
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(54, 131, 255, ${0.3 * (1 - distance / 80)})`;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          });
        }
      });

      // Reset animation when complete
      if (particles.every(p => p.phase >= 1)) {
        setTimeout(() => {
          particles.forEach(p => {
            p.phase = 0;
            p.x = p.initialX;
            p.y = p.initialY;
          });
        }, 2000);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ maxWidth: "800px", maxHeight: "600px" }}
    />
  );
};
