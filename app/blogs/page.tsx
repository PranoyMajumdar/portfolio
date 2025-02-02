"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { BlogCard } from "@/components/blog-card";
import { BlogSearch } from "@/components/blog-search";
import { BlogFilter } from "@/components/blog-filter";
import { useState } from "react";
import { blogPageEmptyState, blogPageHeader, blogs, categories } from "@/constants/blogs";
import { Badge } from "@/components/ui/badge";
import { LucideBookOpen } from "lucide-react";

export default function Blogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || blog.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen pt-24 pb-20">
      <Container>
        <Section>
          {/* Header */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 space-y-4"
            >
              <div className="flex items-center gap-2 text-primary">
                <LucideBookOpen className="w-5 h-5" />
                <p className="text-sm font-medium uppercase tracking-wider">Blog Posts</p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{blogPageHeader.title}</h1>
              <p className="text-muted-foreground max-w-2xl">
                {blogPageHeader.description}
              </p>
            </motion.div>

            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent 
                            opacity-20 blur-3xl" />
            </div>
          </div>

          {/* Search and Filter Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-12 px-2"
          >
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <BlogSearch value={searchQuery} onChange={setSearchQuery} />
              <BlogFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onChange={setSelectedCategory}
              />
            </div>

            {/* Category Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <Badge
                variant={!selectedCategory ? "default" : "secondary"}
                className="cursor-pointer px-4 py-1.5 text-sm"
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Badge>
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  className="cursor-pointer px-4 py-1.5 text-sm hover:bg-primary/10 transition-colors"
                  onClick={() => setSelectedCategory(
                    selectedCategory === category ? null : category
                  )}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Blog Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {filteredBlogs.map((blog, i) => (
              <BlogCard key={blog.id} blog={blog} index={i} />
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredBlogs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <h3 className="text-xl font-semibold mb-2">
                {blogPageEmptyState.title}
              </h3>
              <p className="text-muted-foreground">
                {blogPageEmptyState.description}
              </p>
            </motion.div>
          )}
        </Section>
      </Container>
    </main>
  );
}