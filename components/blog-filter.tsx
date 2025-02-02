"use client";

import { LucideChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface BlogFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onChange: (category: string | null) => void;
}

export function BlogFilter({
  categories,
  selectedCategory,
  onChange,
}: BlogFilterProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="w-[200px] justify-between h-11 rounded-full border-border/50 
                   bg-background/50 backdrop-blur-sm hover:bg-muted/50"
        >
          <span className="truncate">
            {selectedCategory || "All Categories"}
          </span>
          <LucideChevronDown className="w-4 h-4 ml-2 text-muted-foreground transition-transform 
                                    duration-200 ease-in-out" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-[200px] rounded-xl border-border/50 bg-background/80 
                   backdrop-blur-sm shadow-lg animate-in"
      >
        <DropdownMenuItem 
          onClick={() => onChange(null)}
          className={cn(
            "cursor-pointer transition-colors",
            !selectedCategory && "text-primary"
          )}
        >
          All Categories
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {categories.map((category) => (
          <DropdownMenuItem
            key={category}
            onClick={() => onChange(category)}
            className={cn(
              "cursor-pointer transition-colors",
              selectedCategory === category && "text-primary"
            )}
          >
            {category}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 