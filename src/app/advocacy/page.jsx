'use client';
import { motion } from 'framer-motion';
import { advocacyData } from '@/config/advocacy-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AdvocacyPage() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Advocacy & Action
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Turning stories into systemic change. Join me in creating a world where every displaced person has access to education, opportunity, and dignity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="#get-involved">
                Get Involved
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/story">
                My Story
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Impact Statistics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {advocacyData.impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Focus Areas */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advocacyData.focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{area.icon}</div>
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-muted-foreground mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.initiatives.map((initiative, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {initiative}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Current Campaigns */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Current Campaigns</h2>
          <div className="space-y-8">
            {advocacyData.campaigns.map((campaign, index) => (
              <motion.div
                key={campaign.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{campaign.icon}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{campaign.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4 text-lg">{campaign.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {campaign.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white text-blue-600 text-sm rounded-full border border-blue-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild>
                        <Link href={campaign.ctaLink}>
                          {campaign.ctaText}
                        </Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href={campaign.learnMoreLink}>
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  </div>
                  {campaign.progress && (
                    <div className="lg:w-64 bg-white rounded-xl p-6 border">
                      <h4 className="font-semibold mb-3">Campaign Progress</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Goal: {campaign.progress.goal}</span>
                            <span>{campaign.progress.current} achieved</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${(campaign.progress.current / campaign.progress.goal) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {campaign.progress.deadline}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Partnerships */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {advocacyData.partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border rounded-xl p-6 flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl mb-3">{partner.icon}</div>
                  <h3 className="font-semibold text-gray-900">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{partner.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Get Involved Section */}
        <motion.section
          id="get-involved"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of advocates working to create lasting change for displaced communities worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {advocacyData.getInvolvedOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                <p className="text-white/80 mb-4 text-sm">{option.description}</p>
                <Button asChild variant="secondary" className="w-full">
                  <Link href={option.ctaLink}>
                    {option.ctaText}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Signup */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <div className="bg-card border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest updates on our campaigns, success stories, and opportunities to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="whitespace-nowrap">
                Subscribe
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}