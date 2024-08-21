"use client";
import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = () => {
      const now = new Date().getTime();
      const target = new Date("2024-09-09T00:00:00Z").getTime();
      const difference = target - now;
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center space-x-6 md:space-x-12 text-2xl md:text-4xl font-display">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col items-center space-y-2 md:space-y-4 p-4 md:p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg"
        >
          <span className="text-white">{value}</span>
          <p className="text-white capitalize text-sm md:text-base">{unit}</p>
        </div>
      ))}
    </div>
  );
}
