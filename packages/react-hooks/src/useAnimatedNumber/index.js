import { useState, useRef, useLayoutEffect } from 'react';

const defaultOptions = {
  /** The seconds of delay before the next update */
  delay: 10,
  /** Start animating value from */
  from: 0,
  /** The animate duration in milliseconds */
  duration: 500,
};

export default function useAnimatedNumber(to, options) {
  const { delay, duration, from } = { ...defaultOptions, ...options };

  let end = null;
  let nextUpdate = null;

  const frameRef = useRef();
  const [value, setValue] = useState(from);
  const [completed, setCompleted] = useState(false);

  const scheduleNextUpdate = (now, delay) => {
    nextUpdate = Math.min(now + delay, end);
  };

  const next = () => {
    const now = Date.now();

    if (now >= nextUpdate) {
      const progress = Math.max(0, Math.min(1, 1 - (end - now) / duration));
      const delta = (to - from) * progress;
      setValue(from + delta);
      scheduleNextUpdate(now, delay);
    }

    if (now < end) {
      frameRef.current = requestAnimationFrame(next);
    } else {
      setCompleted(true);
    }
  };

  useLayoutEffect(() => {
    const now = Date.now();
    end = now + duration;
    scheduleNextUpdate(now, delay);
    frameRef.current = requestAnimationFrame(next);

    return () => cancelAnimationFrame(frameRef.current);
  }, [from, to]);

  return [value, completed];
}
