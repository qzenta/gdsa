"use client";
import { useInView } from "@/hooks/useInView";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "fade";
}

export default function AnimateIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: Props) {
  const { ref, inView } = useInView();

  const getInitialTransform = () => {
    if (direction === "left") return "translateX(-24px)";
    if (direction === "right") return "translateX(24px)";
    if (direction === "fade") return "none";
    return "translateY(24px)";
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : getInitialTransform(),
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
