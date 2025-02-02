import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
}

export function Section({ 
  children, 
  className,
  ...props 
}: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "py-20 relative overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </motion.section>
  );
} 