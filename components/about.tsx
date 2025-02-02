'use client';

import { motion } from 'framer-motion';
import { Container } from './ui/container';
import { Section } from './ui/section';
import { Badge } from './ui/badge';
import { skills, whatIDoContents } from '@/constants/about';
import { aboutSectionTitle, aboutSectionDescription, aboutMeContents } from '@/constants/about';
export default function About() {

  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="space-y-8">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold"
              >
                {aboutSectionTitle}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-2 text-muted-foreground"
              >
                {aboutSectionDescription}
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 text-muted-foreground"
            >
              {
                aboutMeContents.map((content, index) => (
                  <p key={index}>{content}</p>
                ))
              }
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold">Technical Skills</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, categorySkills], i) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-sm text-muted-foreground mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary"
                          className="hover:bg-muted/80 cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">What I Do</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whatIDoContents.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm"
                  >
                    <h4 className="font-medium mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}