'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function UpdateCard({ update, index }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'planned': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative overflow-hidden">
          <img 
            src={update.image} 
            alt={update.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge variant="secondary" className={getStatusColor(update.status)}>
              {update.status.replace('-', ' ')}
            </Badge>
            {update.featured && (
              <Badge variant="default" className="bg-yellow-100 text-yellow-800">
                Featured
              </Badge>
            )}
          </div>
        </div>
        
        <CardHeader className="pb-3">
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            <Link href={`/updates/${update.slug}`} className="hover:underline">
              {update.title}
            </Link>
          </CardTitle>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <Badge variant="outline">{update.category}</Badge>
            <time>{formatDate(update.date)}</time>
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {update.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {update.tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="inline-block bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
              >
                {tag}
              </span>
            ))}
            {update.tags.length > 3 && (
              <span className="inline-block bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
                +{update.tags.length - 3} more
              </span>
            )}
          </div>
          
          <div className="flex gap-3 mt-auto">
            {update.liveUrl && (
              <a 
                href={update.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm font-medium"
              >
                Live Demo
              </a>
            )}
            {update.githubUrl && (
              <a 
                href={update.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm font-medium"
              >
                GitHub
              </a>
            )}
            <Link 
              href={`/updates/${update.slug}`} 
              className="text-primary hover:underline text-sm font-medium ml-auto"
            >
              Read More →
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}