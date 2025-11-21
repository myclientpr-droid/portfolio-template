'use client';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site-data';

export default function Skills() {
  return (
    <section id="expertise" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Areas of Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My writing specialties and content creation skills
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(siteConfig.expertise).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 capitalize text-primary">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="space-y-3">
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center text-muted-foreground"
                  >
                    <svg 
                      className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Writing Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Writing Platforms</h3>
            <p className="text-muted-foreground">Where you can find my work</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Personal Blog', icon: '📝', description: 'In-depth articles' },
              { name: 'Medium', icon: '📚', description: 'Thought leadership' },
              { name: 'Newsletter', icon: '📧', description: 'Weekly insights' },
              { name: 'Guest Posts', icon: '🤝', description: 'Industry publications' }
            ].map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center bg-background border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">{platform.icon}</div>
                <h4 className="font-semibold mb-1">{platform.name}</h4>
                <p className="text-sm text-muted-foreground">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Collaborations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16"
        >
          <div className="bg-card border rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Featured In</h3>
              <p className="text-muted-foreground">Platforms and publications I've contributed to</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {siteConfig.collaborations.map((collab, index) => (
                <motion.div
                  key={collab.platform}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="text-2xl font-bold text-primary mb-2">{collab.platform}</div>
                  <p className="text-muted-foreground font-medium mb-1">{collab.role}</p>
                  <p className="text-sm text-muted-foreground">{collab.period}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}