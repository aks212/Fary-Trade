import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "fade";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const ScrollReveal = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  className,
  threshold = 0.1,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const getAnimationStyles = () => {
    const baseStyles = {
      opacity: isVisible ? 1 : 0,
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    };

    switch (animation) {
      case "fade-up":
        return {
          ...baseStyles,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
        };
      case "fade-down":
        return {
          ...baseStyles,
          transform: isVisible ? "translateY(0)" : "translateY(-40px)",
        };
      case "fade-left":
        return {
          ...baseStyles,
          transform: isVisible ? "translateX(0)" : "translateX(40px)",
        };
      case "fade-right":
        return {
          ...baseStyles,
          transform: isVisible ? "translateX(0)" : "translateX(-40px)",
        };
      case "scale":
        return {
          ...baseStyles,
          transform: isVisible ? "scale(1)" : "scale(0.9)",
        };
      case "fade":
      default:
        return baseStyles;
    }
  };

  return (
    <div ref={ref} style={getAnimationStyles()} className={cn(className)}>
      {children}
    </div>
  );
};

export default ScrollReveal;
