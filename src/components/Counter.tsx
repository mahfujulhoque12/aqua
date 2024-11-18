"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Define types for props
type CounterData = {
  img: string; // Path to the image
  target: number; // Target value for the counter
  label: string; // Description for the counter
  suffix?: string; // Optional suffix for the counter
};

const Counter: React.FC = () => {
  const counters: CounterData[] = [
    {
      img: "/counter/counter1.png",
      target: 250,
      label: "Successful Projects",
      suffix: "k+",
    },
    {
      img: "/counter/counter2.png",
      target: 600,
      label: "Dedicated Employees",
      suffix: "+",
    },
    {
      img: "/counter/counter3.png",
      target: 10,
      label: "Happy Clients",
      suffix: "k+",
    },
    {
      img: "/counter/counter4.png",
      target: 250,
      label: "Partner with us",
      suffix: "+",
    },
  ];

  const [counts, setCounts] = useState<number[]>(new Array(counters.length).fill(0));

  useEffect(() => {
    const duration = 3000; // Total animation duration in milliseconds
    const maxTarget = Math.max(...counters.map((counter) => counter.target)); // Get the max target value
    const increments = counters.map((counter) => {
      // Calculate the increment rate based on the maxTarget
      return (counter.target / maxTarget) * (duration / 50);
    });

    let currentCounts = [...counts];

    const timer = setInterval(() => {
      let hasReachedTarget = true;

      currentCounts = currentCounts.map((current, index) => {
        const nextValue = current + increments[index];
        if (nextValue >= counters[index].target) {
          return counters[index].target; // Stop at target
        }
        hasReachedTarget = false;
        return nextValue;
      });

      setCounts([...currentCounts]);

      if (hasReachedTarget) {
        clearInterval(timer); // Stop all counters when all targets are reached
      }
    }, 50); // Update every 50ms

    return () => clearInterval(timer); // Cleanup on unmount
  }, [counts,counters]);

  return (
    <section className="py-5 md:py-10 bg-[#2B5240]">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {counters.map((counter, index) => (
            <div key={index} className="flex gap-3 justify-start  items-center">
              {/* Counter Image */}
              <Image
                src={counter.img}
                alt={`${counter.label} icon`}
                width={76}
                height={76}
                className="w-[76px] h-[76px]"
              />
              <div>
                {/* Animated Counter */}
                <h4 className="text-[40px] font-bold text-white">
                  {counts[index].toLocaleString()}
                  {counter.suffix}
                </h4>
                {/* Label */}
                <p className="text-base text-white font-normal">{counter.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
