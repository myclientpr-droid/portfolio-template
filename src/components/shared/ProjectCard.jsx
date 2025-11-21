'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {project.title}
            {project.featured && (
              <Badge variant="secondary">Featured</Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline">{tech}</Badge>
            ))}
          </div>
          <div className="flex gap-4">
            {project.liveUrl && (
              <a href={project.liveUrl} className="text-primary hover:underline">
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} className="text-primary hover:underline">
                GitHub
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}