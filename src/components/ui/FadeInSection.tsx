import { useEffect, useRef, useState } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "down";
}

export default function FadeInSection({
  children,
  className = "",
  direction = "up",
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const hiddenClasses = {
    up: "opacity-0 translate-y-10",
    down: "opacity-0 -translate-y-10",
    left: "opacity-0 -translate-x-10",
    right: "opacity-0 translate-x-10",
  };

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${
          visible
            ? "opacity-100 translate-x-0 translate-y-0"
            : hiddenClasses[direction]
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}