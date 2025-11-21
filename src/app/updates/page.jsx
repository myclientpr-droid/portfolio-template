'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { updatesConfig, updatesData, getUpdatesByCategory } from '@/config/updates-data';
import { UpdateCard } from '@/components/shared/UpdateCard';
import { FilterTabs } from '@/components/shared/FilterTabs';

export default function UpdatesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredUpdates = getUpdatesByCategory(activeCategory);

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">{updatesConfig.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {updatesConfig.subtitle}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <FilterTabs 
            categories={updatesConfig.categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </motion.div>

        {/* Updates Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredUpdates.map((update, index) => (
            <UpdateCard 
              key={update.id} 
              update={update} 
              index={index}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredUpdates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-muted-foreground">
              No updates found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}