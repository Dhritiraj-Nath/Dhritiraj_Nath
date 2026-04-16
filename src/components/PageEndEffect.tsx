import { useEffect, useRef, useState } from "react";

const PageEndEffect = () => {
  const [hasTriggered, setHasTriggered] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggered) {
          triggerFeedback();
          setHasTriggered(true);
        } else if (!entry.isIntersecting) {
          setHasTriggered(false);
        }
      },
      { threshold: 1.0 }
    );

    if (triggerRef.current) observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, [hasTriggered]);

  const triggerFeedback = () => {
    if ("vibrate" in navigator) navigator.vibrate([100, 50, 100]);
    playBeep();
  };

  const playBeep = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.2);
    } catch (e) {}
  };

  return <div ref={triggerRef} className="h-1 w-full" />;
};

export default PageEndEffect;
