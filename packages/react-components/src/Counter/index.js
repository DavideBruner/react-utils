import React, { useState, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

export default function Counter({
  className,
  delay,
  digits,
  formatter,
  from,
  onComplete,
  speed,
  tagName: Tag,
  to,
}) {
  let end = null;
  let nextUpdate = null;

  const frameRef = useRef();
  const [counter, setCounter] = useState(from);

  const scheduleNextUpdate = (now, delay) => {
    nextUpdate = Math.min(now + delay, end);
  };

  const next = () => {
    const now = Date.now();

    if (now >= nextUpdate) {
      const progress = Math.max(0, Math.min(1, 1 - (end - now) / speed));
      const delta = (to - from) * progress;
      setCounter(from + delta);
      scheduleNextUpdate(now, delay);
    }

    if (now < end) {
      frameRef.current = requestAnimationFrame(next);
    } else if (onComplete) {
      onComplete(end);
    }
  };

  useLayoutEffect(() => {
    const now = Date.now();
    end = now + speed;
    scheduleNextUpdate(now, delay);
    frameRef.current = requestAnimationFrame(next);

    return () => cancelAnimationFrame(frameRef.current);
  }, [from, to]);

  return (
    <Tag className={className}>
      {formatter(counter.toFixed(digits))}
    </Tag>
  );
}

Counter.propTypes = {
  /** The CSS classname of the counter */
  className: PropTypes.string.isRequired,
  /** The seconds of delay before the next update */
  delay: PropTypes.number,
  /** The number of decimals to display */
  digits: PropTypes.number,
  /**  Function returning formatted current value */
  formatter: PropTypes.func,
  /** Start counting from */
  from: PropTypes.number,
  /** A callback triggered when counting is done */
  onComplete: PropTypes.func,
  /** The animate duration in milliseconds */
  speed: PropTypes.number,
  /** The wrapper element, default is span */
  tagName: PropTypes.string,
  /** Counting to */
  to: PropTypes.number.isRequired,
};

Counter.defaultProps = {
  delay: 10,
  digits: 0,
  formatter: t => t,
  from: 0,
  onComplete: t => t,
  speed: 500,
  tagName: 'span',
};

