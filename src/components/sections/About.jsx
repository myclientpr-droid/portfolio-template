'use client';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {siteConfig.personal.bio}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">My Writing Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I started writing about technology and digital culture {siteConfig.blogStats.yearsWriting} years ago, 
              driven by a passion for understanding how technology shapes our world. What began as personal notes 
              has evolved into a platform reaching readers in {siteConfig.blogStats.countriesReached} countries.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My mission is to bridge the gap between complex technological concepts and everyday understanding, 
              creating content that's both insightful and accessible. I believe that great writing should educate, 
              inspire, and spark meaningful conversations.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button asChild>
                <Link href="/blog">Read My Blog</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/newsletter">Join Newsletter</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-muted rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-4">Writing Profile</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Location</span>
                <span>{siteConfig.personal.location}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Writing Experience</span>
                <span>{siteConfig.blogStats.yearsWriting}+ Years</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Articles Published</span>
                <span>{siteConfig.blogStats.totalPosts}+</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Total Readers</span>
                <span>{siteConfig.blogStats.totalReaders}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Status</span>
                <span className="text-green-600">Accepting New Projects</span>
              </div>
            </div>

            {/* Writing Platforms */}
            <div className="mt-6 pt-4 border-t">
              <h4 className="font-semibold mb-3">Featured On</h4>
              <div className="flex flex-wrap gap-2">
                {siteConfig.collaborations.map((collab) => (
                  <span 
                    key={collab.platform}
                    className="bg-background text-foreground px-3 py-1 rounded-full text-sm border"
                  >
                    {collab.platform}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Blog Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(siteConfig.blogStats).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">What Readers Say</h3>
            <p className="text-muted-foreground">Feedback from the community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-card border rounded-lg p-6 text-center"
              >
                <div className="text-4xl mb-4">"</div>
                <p className="text-muted-foreground italic mb-4 line-clamp-4">
                  "{testimonial.quote}"
                </p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}