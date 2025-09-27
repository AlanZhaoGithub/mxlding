"use client";

import React, { useRef, useEffect, useCallback } from "react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
}

type Circle = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
};

export default function Particles({
  className = "",
  quantity = 100,
  staticity = 5,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Circle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const canvasSize = useRef({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  // -------------------- Canvas Resize --------------------
  const resizeCanvas = useCallback(() => {
    if (!canvasRef.current  || !context.current) return;


    const w = window.innerWidth;
    const h = window.innerHeight;
    canvasSize.current = { w, h };

    canvasRef.current.width = w * dpr;
    canvasRef.current.height = h * dpr;
    canvasRef.current.style.width = `${w}px`;
    canvasRef.current.style.height = `${h}px`;

    context.current.setTransform(1, 0, 0, 1, 0, 0);
    context.current.scale(dpr, dpr);
    // Reset circles
  }, [dpr]);

  // -------------------- Circle Helpers --------------------
  const circleParams = useCallback((): Circle => {
    const { w, h } = canvasSize.current;
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      translateX: 0,
      translateY: 0,
      size: Math.random() * 2 + 0.1,
      alpha: 0,
      targetAlpha: Math.random() * 0.6 + 0.1,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      magnetism: 0.1 + Math.random() * 4,
    };
  }, []);

  const drawCircle = useCallback((circle: Circle, update = false) => {
    if (!context.current) return;
    const { x, y, translateX, translateY, size, alpha } = circle;

    context.current.save();
    context.current.translate(translateX, translateY);
    context.current.beginPath();
    context.current.arc(x, y, size, 0, 2 * Math.PI);
    context.current.fillStyle = `rgba(255, 255, 255, ${alpha})`;
    context.current.fill();
    context.current.restore();

    if (!update) circles.current.push(circle);
  }, []);

  const clearContext = useCallback(() => {
    if (!context.current) return;
    const { w, h } = canvasSize.current;
    context.current.clearRect(0, 0, w, h);
  }, []);

  // -------------------- Mouse Tracking --------------------
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      const x = e.clientX - rect.left - w / 2;
      const y = e.clientY - rect.top - h / 2;
      mouse.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // -------------------- Particle Draw --------------------
  const remapValue = useCallback(
    (value: number, start1: number, end1: number, start2: number, end2: number) => {
      const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
      return Math.max(remapped, 0);
    },
    []
  );

  const drawParticles = useCallback(() => {
    clearContext();
    for (let i = 0; i < quantity; i++) {
      drawCircle(circleParams());
    }
  }, [circleParams, clearContext, drawCircle, quantity]);

  // -------------------- Animation Loop --------------------
  const animate = useCallback(() => {
    clearContext();
    circles.current.forEach((circle, i) => {
      const { w, h } = canvasSize.current;
      const edge = [
        circle.x + circle.translateX - circle.size,
        w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        h - circle.y - circle.translateY - circle.size,
      ];
      const closestEdge = Math.min(...edge);
      const remapClosestEdge = remapValue(closestEdge, 0, 20, 0, 1);

      circle.alpha =
        remapClosestEdge > 1
          ? Math.min(circle.alpha + 0.02, circle.targetAlpha)
          : circle.targetAlpha * remapClosestEdge;

      circle.x += circle.dx;
      circle.y += circle.dy;

      circle.translateX += (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease;
      circle.translateY += (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease;

      if (circle.x < -circle.size || circle.x > w + circle.size || circle.y < -circle.size || circle.y > h + circle.size) {
        circles.current.splice(i, 1);
        drawCircle(circleParams());
      } else {
        drawCircle(circle, true);
      }
    });

    window.requestAnimationFrame(animate);
  }, [drawCircle, circleParams, ease, staticity, remapValue, clearContext]);

  // -------------------- Init --------------------
  useEffect(() => {
    if (canvasRef.current) context.current = canvasRef.current.getContext("2d");
    resizeCanvas();
    drawParticles();
    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas, drawParticles, animate]);

  // -------------------- Refresh Trigger --------------------
  useEffect(() => {
    if (refresh) {
      resizeCanvas();
      drawParticles();
    }
  }, [refresh, resizeCanvas, drawParticles]);

  return (
    <div className={`${className} fixed inset-0 -z-10`} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
