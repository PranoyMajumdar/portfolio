import { Blog } from "@/types/blog";

export const categories = [
  "Web Development",
  "React",
  "Next.js",
  "TypeScript",
  "UI/UX",
  "Performance",
  "DevOps",
  "Backend",
  "Database",
  "Testing",
];

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Building a Modern Portfolio with Next.js and Tailwind",
    slug: "building-modern-portfolio",
    excerpt: "Learn how to create a stunning portfolio website using Next.js 14 and Tailwind CSS with modern design principles and advanced animations.",
    content: "Full blog content here...",
    date: "2024-03-15",
    categories: ["Web Development", "Next.js", "UI/UX"],
  },
  {
    id: "2",
    title: "Advanced TypeScript Patterns for React Applications",
    slug: "typescript-patterns-react",
    excerpt: "Explore advanced TypeScript patterns and best practices to write more maintainable and type-safe React applications.",
    content: "Full blog content here...",
    date: "2024-03-10",
    categories: ["TypeScript", "React", "Web Development"],
  },
  {
    id: "3",
    title: "Optimizing Next.js Applications for Performance",
    slug: "nextjs-performance-optimization",
    excerpt: "Deep dive into various techniques and strategies to optimize your Next.js applications for better performance and user experience.",
    content: "Full blog content here...",
    date: "2024-03-05",
    categories: ["Next.js", "Performance", "Web Development"],
  },
  {
    id: "4",
    title: "Building Scalable APIs with Node.js and Express",
    slug: "scalable-nodejs-apis",
    excerpt: "Learn how to design and build scalable REST APIs using Node.js, Express, and modern backend development practices.",
    content: "Full blog content here...",
    date: "2024-02-28",
    categories: ["Backend", "Web Development", "DevOps"],
  },
  {
    id: "5",
    title: "Modern Database Design with Prisma and PostgreSQL",
    slug: "modern-database-design",
    excerpt: "Explore modern database design patterns using Prisma ORM with PostgreSQL for scalable web applications.",
    content: "Full blog content here...",
    date: "2024-02-20",
    categories: ["Database", "Backend", "Web Development"],
  },
  {
    id: "6",
    title: "Testing React Applications with Vitest and Testing Library",
    slug: "react-testing-guide",
    excerpt: "Comprehensive guide to testing React applications using Vitest and React Testing Library with best practices.",
    content: "Full blog content here...",
    date: "2024-02-15",
    categories: ["Testing", "React", "Web Development"],
  },
]; 

export const blogPageHeader = {
  title: "My Writing",
  description: "Exploring web development, sharing insights, and documenting my journey through the ever-evolving landscape of modern technology.",
}

export const blogPageEmptyState = {
  title: "No blogs found",
  description: "Try adjusting your search or filter to find what you're looking for.",
}