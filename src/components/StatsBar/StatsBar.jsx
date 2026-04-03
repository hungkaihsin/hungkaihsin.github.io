import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './StatsBar.css';

const StatsBar = () => {
  const stats = [
    { value: 3.95, label: 'GPA', suffix: '', decimals: 2, color: '#3b82f6' },
    { value: 1, label: 'Published Paper', suffix: '', decimals: 0, color: '#f59e0b' },
    { value: 10, label: 'Projects Built', suffix: '+', decimals: 0, color: '#a78bfa' },
    { value: 1000, label: 'Records Processed', suffix: '+', decimals: 0, color: '#fb7185' },
  ];

  return (
    <motion.div
      className="stats-bar"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {stats.map((stat, index) => (
        <AnimatedStat key={index} stat={stat} delay={index * 0.1} color={stat.color} />
      ))}
    </motion.div>
  );
};

const AnimatedStat = ({ stat, delay, color }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const startTime = performance.now();
          const startDelay = delay * 1000;

          setTimeout(() => {
            const animate = (currentTime) => {
              const elapsed = currentTime - startTime - startDelay;
              if (elapsed < 0) {
                requestAnimationFrame(animate);
                return;
              }
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(eased * stat.value);

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            requestAnimationFrame(animate);
          }, startDelay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [stat.value, delay, hasAnimated]);

  const displayValue = stat.decimals > 0 
    ? count.toFixed(stat.decimals) 
    : Math.floor(count);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-value" style={{ color }}>
        {displayValue}{stat.suffix}
      </span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
};

export default StatsBar;
