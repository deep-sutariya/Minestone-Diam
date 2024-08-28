"use client"

import { useEffect, useRef } from 'react';

export default function CursorCircle() {
  const circleRef = useRef(null);
  const smallCircleRef = useRef(null);
  const delay = 0.1;
  const smallDelay = 0.15;

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;
    let smallCircleX = 0;
    let smallCircleY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      circleX += (mouseX - circleX) * delay;
      circleY += (mouseY - circleY) * delay;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circleX - 20}px, ${circleY - 20}px, 0)`;
      }

      smallCircleX += (circleX - smallCircleX) * smallDelay;
      smallCircleY += (circleY - smallCircleY) * smallDelay;

      if (smallCircleRef.current) {
        smallCircleRef.current.style.transform = `translate3d(${smallCircleX - 5}px, ${smallCircleY - 5}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);

    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={circleRef} className="cursor-circle" />
      <div ref={smallCircleRef} className="small-cursor-circle" />
    </>
  );
}
