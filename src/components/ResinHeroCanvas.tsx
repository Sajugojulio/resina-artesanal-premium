import { useEffect, useRef } from "react";

interface Stream {
  angle: number;
  speed: number;
  width: number;
  amplitude: number;
  colorA: string;
  colorB: string;
  phase: number;
  offset: number;
}

const STREAM_COUNT = 18;

const palette = [
  ["rgba(255, 209, 102, 0.95)", "rgba(255, 122, 69, 0.55)"],
  ["rgba(96, 232, 255, 0.95)", "rgba(29, 155, 240, 0.45)"],
  ["rgba(156, 118, 255, 0.85)", "rgba(81, 63, 255, 0.3)"],
  ["rgba(255, 247, 174, 0.95)", "rgba(255, 210, 97, 0.35)"],
];

const createStreams = () =>
  Array.from({ length: STREAM_COUNT }, (_, index) => {
    const [colorA, colorB] = palette[index % palette.length];

    return {
      angle: (-Math.PI * 0.75) + (index / STREAM_COUNT) * Math.PI * 1.7,
      speed: 0.5 + Math.random() * 0.55,
      width: 1.4 + Math.random() * 3.5,
      amplitude: 16 + Math.random() * 42,
      colorA,
      colorB,
      phase: Math.random() * Math.PI * 2,
      offset: 70 + Math.random() * 180,
    } satisfies Stream;
  });

const ResinHeroCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const streams = createStreams();
    let frameId = 0;

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.max(1, Math.floor(width * ratio));
      canvas.height = Math.max(1, Math.floor(height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const drawCore = (centerX: number, centerY: number, time: number) => {
      const pulse = 1 + Math.sin(time * 1.8) * 0.06;
      const coreGradient = context.createRadialGradient(centerX, centerY, 12, centerX, centerY, 120);
      coreGradient.addColorStop(0, "rgba(255, 245, 214, 0.98)");
      coreGradient.addColorStop(0.12, "rgba(255, 196, 96, 0.95)");
      coreGradient.addColorStop(0.4, "rgba(76, 242, 235, 0.42)");
      coreGradient.addColorStop(1, "rgba(17, 23, 39, 0)");

      context.save();
      context.translate(centerX, centerY);
      context.scale(pulse, pulse);
      context.beginPath();
      context.fillStyle = coreGradient;
      context.arc(0, 0, 120, 0, Math.PI * 2);
      context.fill();

      context.beginPath();
      context.fillStyle = "rgba(255, 231, 173, 0.95)";
      context.arc(0, 0, 34, 0, Math.PI * 2);
      context.fill();

      context.beginPath();
      context.fillStyle = "rgba(255, 255, 255, 0.65)";
      context.arc(-9, -10, 12, 0, Math.PI * 2);
      context.fill();
      context.restore();
    };

    const drawStreams = (width: number, height: number, time: number) => {
      const centerX = width * 0.67;
      const centerY = height * 0.46;

      streams.forEach((stream, index) => {
        const dx = Math.cos(stream.angle);
        const dy = Math.sin(stream.angle);
        const normalX = -dy;
        const normalY = dx;
        const length = stream.offset + width * 0.22 + Math.sin(time * 0.25 + index) * 22;
        const segments = 38;

        context.beginPath();

        for (let step = 0; step <= segments; step += 1) {
          const progress = step / segments;
          const distance = progress * length;
          const wave =
            Math.sin(progress * 10 + time * stream.speed + stream.phase) * stream.amplitude * (1 - progress * 0.22) +
            Math.cos(progress * 22 - time * 0.8 + stream.phase) * (stream.amplitude * 0.18);

          const x = centerX + dx * distance + normalX * wave;
          const y = centerY + dy * distance + normalY * wave;

          if (step === 0) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }
        }

        const gradient = context.createLinearGradient(
          centerX,
          centerY,
          centerX + dx * length,
          centerY + dy * length,
        );
        gradient.addColorStop(0, stream.colorA);
        gradient.addColorStop(0.45, "rgba(101, 244, 255, 0.72)");
        gradient.addColorStop(1, stream.colorB);

        context.strokeStyle = gradient;
        context.lineWidth = stream.width;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.shadowBlur = 22;
        context.shadowColor = stream.colorA;
        context.stroke();

        if (index % 3 === 0) {
          const dropletDistance = length * (0.72 + (index % 4) * 0.05);
          const dropletWave = Math.sin(time * 1.8 + stream.phase) * 14;
          const dropletX = centerX + dx * dropletDistance + normalX * dropletWave;
          const dropletY = centerY + dy * dropletDistance + normalY * dropletWave;

          context.beginPath();
          context.fillStyle = stream.colorA;
          context.shadowBlur = 18;
          context.shadowColor = stream.colorA;
          context.arc(dropletX, dropletY, 2 + (index % 3), 0, Math.PI * 2);
          context.fill();
        }
      });
    };

    const render = (timestamp: number) => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const time = timestamp * 0.001;

      context.clearRect(0, 0, width, height);

      const backgroundGradient = context.createRadialGradient(
        width * 0.66,
        height * 0.42,
        0,
        width * 0.5,
        height * 0.5,
        width * 0.78,
      );
      backgroundGradient.addColorStop(0, "rgba(17, 28, 51, 0.42)");
      backgroundGradient.addColorStop(0.38, "rgba(10, 15, 25, 0.18)");
      backgroundGradient.addColorStop(1, "rgba(7, 9, 13, 0)");
      context.fillStyle = backgroundGradient;
      context.fillRect(0, 0, width, height);

      drawStreams(width, height, time);
      drawCore(width * 0.67, height * 0.46, time);

      frameId = window.requestAnimationFrame(render);
    };

    resize();
    frameId = window.requestAnimationFrame(render);
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="resin-orb-shell relative mx-auto aspect-square w-full max-w-[720px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#05070b]/80">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_44%,rgba(255,185,84,0.22),transparent_22%),radial-gradient(circle_at_68%_48%,rgba(69,231,255,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_30%)]" />
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_bottom,transparent,transparent_3px,rgba(255,255,255,0.05)_3px,rgba(255,255,255,0.05)_4px)] [background-size:100%_11px]" />
      <div className="pointer-events-none absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.28em] text-white/55">
          <span>Flow resin</span>
          <span>IDP visual system</span>
        </div>
      </div>
    </div>
  );
};

export default ResinHeroCanvas;
