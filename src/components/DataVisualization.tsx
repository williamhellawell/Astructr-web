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

    // Database layer positions (3-tier stack)
    const dbCenterX = 600;
    const dbCenterY = 300;
    const dbWidth = 180;
    const dbHeight = 40;
    const dbDepth = 15;
    const layerSpacing = 45;

    // Particle class
    class Particle {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      targetLayer: number;
      initialX: number;
      initialY: number;
      size: number;
      color: string;
      speed: number;
      phase: number;

      constructor() {
        // Start scattered on the left
        this.initialX = Math.random() * 250;
        this.initialY = Math.random() * 600;
        this.x = this.initialX;
        this.y = this.initialY;
        
        // Assign to one of three database layers
        this.targetLayer = Math.floor(Math.random() * 3);
        const layerY = dbCenterY + (this.targetLayer - 1) * layerSpacing;
        
        // Target position on the database ellipse
        const angle = Math.random() * Math.PI * 2;
        const radiusX = dbWidth / 2;
        const radiusY = dbHeight / 2;
        this.targetX = dbCenterX + Math.cos(angle) * radiusX * (0.7 + Math.random() * 0.3);
        this.targetY = layerY + Math.sin(angle) * radiusY * (0.5 + Math.random() * 0.5);
        
        this.size = 3 + Math.random() * 3;
        this.color = "#3683FF";
        this.speed = 0.015 + Math.random() * 0.015;
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
        ctx.shadowBlur = 12;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Function to draw a 3D database cylinder layer
    const drawDatabaseLayer = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, depth: number, opacity: number) => {
      const radiusX = width / 2;
      const radiusY = height / 2;

      // Draw the cylinder body with gradient
      const gradient = ctx.createLinearGradient(x - radiusX, y, x + radiusX, y);
      gradient.addColorStop(0, `rgba(54, 131, 255, ${0.3 * opacity})`);
      gradient.addColorStop(0.5, `rgba(54, 131, 255, ${0.5 * opacity})`);
      gradient.addColorStop(1, `rgba(54, 131, 255, ${0.3 * opacity})`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(x - radiusX, y, width, depth);

      // Draw bottom ellipse (darker)
      ctx.beginPath();
      ctx.ellipse(x, y + depth, radiusX, radiusY, 0, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(2, 51, 77, ${0.6 * opacity})`;
      ctx.fill();
      
      // Highlight on bottom ellipse
      ctx.strokeStyle = `rgba(54, 131, 255, ${0.4 * opacity})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw top ellipse (lighter, main surface)
      ctx.beginPath();
      ctx.ellipse(x, y, radiusX, radiusY, 0, 0, Math.PI * 2);
      const topGradient = ctx.createRadialGradient(x, y, 0, x, y, radiusX);
      topGradient.addColorStop(0, `rgba(54, 131, 255, ${0.8 * opacity})`);
      topGradient.addColorStop(1, `rgba(54, 131, 255, ${0.5 * opacity})`);
      ctx.fillStyle = topGradient;
      ctx.fill();
      
      // Glow effect on top
      ctx.strokeStyle = `rgba(54, 131, 255, ${0.9 * opacity})`;
      ctx.lineWidth = 3;
      ctx.stroke();

      // Add shine/reflection
      ctx.beginPath();
      ctx.ellipse(x, y - 5, radiusX * 0.6, radiusY * 0.4, 0, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${0.2 * opacity})`;
      ctx.fill();
    };

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate average phase for database opacity
      const avgPhase = particles.reduce((sum, p) => sum + p.phase, 0) / particles.length;
      const dbOpacity = Math.min(1, avgPhase * 1.5);

      // Draw the 3-tier database stack (back to front)
      if (dbOpacity > 0.1) {
        // Bottom layer (darkest)
        drawDatabaseLayer(ctx, dbCenterX, dbCenterY + layerSpacing, dbWidth, dbHeight, dbDepth, dbOpacity * 0.7);
        
        // Middle layer
        drawDatabaseLayer(ctx, dbCenterX, dbCenterY, dbWidth, dbHeight, dbDepth, dbOpacity * 0.85);
        
        // Top layer (brightest)
        drawDatabaseLayer(ctx, dbCenterX, dbCenterY - layerSpacing, dbWidth, dbHeight, dbDepth, dbOpacity);

        // Add connecting glow between layers
        if (dbOpacity > 0.5) {
          ctx.strokeStyle = `rgba(54, 131, 255, ${0.3 * dbOpacity})`;
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 5]);
          
          // Lines between layers
          const leftX = dbCenterX - dbWidth / 2;
          const rightX = dbCenterX + dbWidth / 2;
          
          ctx.beginPath();
          ctx.moveTo(leftX, dbCenterY - layerSpacing + dbDepth);
          ctx.lineTo(leftX, dbCenterY);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(rightX, dbCenterY - layerSpacing + dbDepth);
          ctx.lineTo(rightX, dbCenterY);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(leftX, dbCenterY + dbDepth);
          ctx.lineTo(leftX, dbCenterY + layerSpacing);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(rightX, dbCenterY + dbDepth);
          ctx.lineTo(rightX, dbCenterY + layerSpacing);
          ctx.stroke();
          
          ctx.setLineDash([]);
        }
      }
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      // Reset animation when complete
      if (particles.every(p => p.phase >= 1)) {
        setTimeout(() => {
          particles.forEach(p => {
            p.phase = 0;
            p.x = p.initialX;
            p.y = p.initialY;
          });
        }, 2500);
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
