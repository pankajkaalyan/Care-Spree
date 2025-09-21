

import React, { useState, useEffect, useRef, useCallback } from 'react';

// Easing function for a smooth animation curve
// FIX: Using a pure function for clarity and to avoid potential side-effects that could cause cryptic errors.
const easeOutCubic = (t: number) => Math.pow(t - 1, 3) + 1;

/**
 * A custom hook to animate a number counting up when the element is scrolled into view.
 * @param ref - A React ref attached to the element to be observed.
 * @param end - The final number to count up to.
 * @param duration - The duration of the animation in milliseconds.
 * @param decimals - The number of decimal places to display.
 * @returns The current animated value as a formatted string.
 */
// FIX: Refactored useCountUp to use a more standard requestAnimationFrame pattern to resolve a cryptic error.
const useCountUp = (ref: React.RefObject<HTMLElement>, end: number, duration: number = 2000, decimals: number = 0) => {
    // FIX: The lazy initializer for useState was causing an error. Since the initial value is a primitive `0`, the lazy initializer is not necessary and can be replaced with the direct value.
    const [count, setCount] = useState(0);
    const animationFrameId = useRef<number>();
    const isCounting = useRef(false);
    const observer = useRef<IntersectionObserver | null>(null);
    const startTimeRef = useRef<number | null>(null);

    const animate = useCallback((timestamp: number) => {
        if (startTimeRef.current === null) {
            startTimeRef.current = timestamp;
        }

        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);
        const currentCount = end * easedProgress;

        setCount(currentCount);

        if (progress < 1) {
            animationFrameId.current = requestAnimationFrame(animate);
        } else {
            // Ensure final value is exact
            setCount(end);
        }
    }, [end, duration]);

    const handleIntersect = useCallback(([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting && !isCounting.current) {
            isCounting.current = true;
            startTimeRef.current = null; // Reset start time before animation
            animationFrameId.current = requestAnimationFrame(animate);
            // Disconnect observer once animation starts to save resources
            if (observer.current && ref.current) {
                observer.current.unobserve(ref.current);
            }
        }
    }, [animate, ref]);

    useEffect(() => {
        observer.current = new IntersectionObserver(handleIntersect, { threshold: 0.5 });
        const currentRef = ref.current;

        if (currentRef) {
            observer.current.observe(currentRef);
        }

        return () => {
            if (currentRef && observer.current) {
                observer.current.unobserve(currentRef);
            }
            if(animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [ref, handleIntersect]);

    return count.toFixed(decimals);
};


interface StatCardProps {
  endValue: number;
  title: string;
  description: string;
  rating?: number;
  suffix?: string;
  decimals?: number;
}

const StatCard: React.FC<StatCardProps> = ({ endValue, title, description, rating, suffix = '', decimals = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const count = useCountUp(cardRef, endValue, 2000, decimals);

  return (
    <div ref={cardRef} className="p-4 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-gray-800/60 cursor-pointer">
      <div className="flex items-start space-x-4">
        <p className="text-5xl font-bold text-gray-900 dark:text-white min-w-[120px] text-right tabular-nums">{count}{suffix}</p>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
          {rating && (
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <i key={i} className={`fa-solid fa-star ${i < Math.floor(rating) ? 'text-blue-500 dark:text-blue-400' : 'text-gray-300 dark:text-gray-600'}`}></i>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="animate-on-scroll">
            <StatCard 
              endValue={80} 
              suffix="%"
              title="Quality Resident Care" 
              description="Dedicated to providing compassionate and personalized support." 
            />
          </div>
          <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            <StatCard 
              endValue={4.98}
              decimals={2}
              title="Rated the Top Senior Care Provider" 
              description="" 
              rating={5}
            />
          </div>
          <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <StatCard 
              endValue={95}
              suffix="%" 
              title="Exceptional Medical Services" 
              description="Ensuring the highest standards of health and well-being." 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;