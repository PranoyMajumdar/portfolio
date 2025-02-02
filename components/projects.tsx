"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LucideArrowUpRight } from "lucide-react";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { Badge } from "./ui/badge";
import {
  featuredProjects,
  featuredProjectSectionDescription,
  featuredProjectSectionLink,
  featuredProjectSectionTitle,
} from "@/constants/projects";

export default function Projects() {
  return (
    <Section>
      <Container>
        <motion.div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              {featuredProjectSectionTitle}
            </h2>
            <p className="text-muted-foreground mt-1">
              {featuredProjectSectionDescription}
            </p>
          </div>
          <Link
            href={featuredProjectSectionLink}
            className="text-muted-foreground hover:text-primary transition-colors group flex items-center gap-2"
          >
            View all projects
            <LucideArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Link href={project.link} className="group block">
                <div
                  className="p-6 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm 
                              hover:bg-muted/50 transition-all duration-300 h-full"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                      <LucideArrowUpRight
                        className="w-5 h-5 text-muted-foreground group-hover:text-primary 
                                             transition-all transform group-hover:-translate-y-0.5 
                                             group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="hover:bg-muted/80 cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
