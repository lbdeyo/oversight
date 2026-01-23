'use client';

import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

interface AnimatedTextProps {
  sequence: (string | number)[];
  wrapper?: string;
  speed?: number;
  pageKey: string;
  elementKey: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({
  sequence,
  wrapper = 'span',
  speed = 50,
  pageKey,
  elementKey,
  className = '',
  style,
}: AnimatedTextProps) {
  const storageKey = `oversight-animated-${pageKey}-${elementKey}`;
  const [shouldAnimate, setShouldAnimate] = useState<boolean | null>(null);

  useEffect(() => {
    // Check sessionStorage on mount
    if (typeof window !== 'undefined') {
      const hasAnimated = sessionStorage.getItem(storageKey);
      if (hasAnimated === 'true') {
        setShouldAnimate(false);
      } else {
        setShouldAnimate(true);
        // Calculate total animation time and mark as complete
        let totalTime = 0;
        let totalChars = 0;
        sequence.forEach((item) => {
          if (typeof item === 'number') {
            totalTime += item;
          } else if (typeof item === 'string') {
            totalChars += item.length;
          }
        });
        const animationTime = totalTime + (totalChars * speed);
        const timeout = setTimeout(() => {
          sessionStorage.setItem(storageKey, 'true');
        }, animationTime);
        return () => clearTimeout(timeout);
      }
    }
  }, [sequence, speed, storageKey]);

  // Extract the final text from the sequence
  const getFinalText = () => {
    const textParts = sequence.filter((item): item is string => typeof item === 'string');
    return textParts[textParts.length - 1] || '';
  };

  // Show nothing while checking (prevents flash)
  if (shouldAnimate === null) {
    return <span className={className} style={style}></span>;
  }

  // Show final text if already animated
  if (!shouldAnimate) {
    return (
      <span className={className} style={style}>
        {getFinalText()}
      </span>
    );
  }

  // Show animation
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper={wrapper as any}
      speed={speed as any}
      repeat={0}
      cursor={false}
      className={className}
      style={style}
    />
  );
}
