"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Blog } from "@/types/blog";
import { LucideArrowUpRight, LucideClock, LucideTag } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  blog: Blog;
  index: number;
}

export function BlogCard({ blog, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={`/blogs/${blog.slug}`}>
        <article className="relative overflow-hidden rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm 
                        hover:bg-muted/50 transition-all duration-300 h-full">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-background/5 opacity-0 
                       group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative p-6">
            <div className="flex flex-col h-full">
              <div className="flex-1 space-y-4">
                {/* Meta Information */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <LucideClock className="w-4 h-4" />
                    <time dateTime={blog.date}>{formatDate(blog.date)}</time>
                  </div>
                  <motion.span 
                    className="p-2 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <LucideArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary 
                                               transition-all transform group-hover:-translate-y-0.5 
                                               group-hover:translate-x-0.5" />
                  </motion.span>
                </div>

                {/* Title & Excerpt */}
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-muted-foreground line-clamp-2 text-sm">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              {/* Categories */}
              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="flex items-center gap-3">
                  <LucideTag className="w-4 h-4 text-muted-foreground" />
                  <div className="flex flex-wrap gap-2">
                    {blog.categories.map((category) => (
                      <Badge 
                        key={category}
                        variant="secondary"
                        className="bg-primary/5 hover:bg-primary/10 text-xs"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
} 