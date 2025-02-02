"use client";

import { LucideSearch, LucideX } from "lucide-react";
import { motion } from "framer-motion";

interface BlogSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function BlogSearch({ value, onChange }: BlogSearchProps) {
  return (
    <motion.div 
      className="relative flex-1"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative group">
        <LucideSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60 
                                transition-colors group-focus-within:text-primary" />
        <input
          type="text"
          placeholder="Search articles..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-11 pl-11 pr-12 rounded-full border border-border/50 bg-background/50 
                    focus:outline-none focus:ring-2 focus:ring-primary/20 
                   transition-all duration-300 placeholder:text-muted-foreground/50"
        />
        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full
                     hover:bg-primary/10 text-muted-foreground/60 hover:text-primary 
                     transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <LucideX className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
} 