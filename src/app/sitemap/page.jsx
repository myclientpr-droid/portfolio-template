"use client";
import Link from 'next/link';
import { siteConfig } from '@/config/site-data';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  // Generate all blog post links
  const allBlogPosts = [
    ...(siteConfig.featuredPosts || []),
    ...(siteConfig.recentPosts || [])
  ];

  // Remove duplicates based on slug
  const uniqueBlogPosts = allBlogPosts.filter((post, index, self) =>
    index === self.findIndex(p => p.slug === post.slug)
  );

  const sitemapSections = [
    {
      title: 'Main Pages',
      links: [
        { label: 'Home', href: '/', description: 'Welcome page and introduction' },
        { label: 'About', href: '/about', description: 'Learn about my background and journey' },
        { label: 'Posts', href: 'posts', description: 'All blog posts and articles' },
        { label: 'Contact', href: '/contact', description: 'Get in touch with me' },
      ]
    },
    {
      title: 'Content Categories',
      links: (siteConfig.categories || []).map(category => ({
        label: category.name,
        href: `/categories/${category.slug}`,
        description: category.description,
        icon: category.icon
      }))
    },
    {
      title: 'Featured Blog Posts',
      links: (siteConfig.featuredPosts || []).slice(0, 8).map(post => ({
        label: post.title,
        href: `/blog/${post.slug}`,
        description: post.excerpt,
        category: post.category
      }))
    },
    {
      title: 'Recent Writings',
      links: (siteConfig.recentPosts || []).slice(0, 8).map(post => ({
        label: post.title,
        href: `/blog/${post.slug}`,
        description: post.excerpt,
        category: post.category
      }))
    },
    {
      title: 'Legal Pages',
      links: [
        { label: 'Privacy Policy', href: '/privacy', description: 'How we handle your data' },
        { label: 'Terms of Service', href: '/terms', description: 'Terms and conditions of use' },
        { label: 'Cookie Policy', href: '/cookies', description: 'Our cookie usage policy' },
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sitemap
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A complete overview of all pages and content on this website
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {uniqueBlogPosts.length}+ Articles
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {sitemapSections.reduce((total, section) => total + section.links.length, 0)}+ Pages
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
                {siteConfig.categories?.length || 0} Categories
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="bg-card border rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sitemapSections.map((section) => (
                <a
                  key={section.title}
                  href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block p-4 text-center bg-background rounded-lg border hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {section.title === 'Main Pages' && '🏠'}
                    {section.title === 'Content Categories' && '📂'}
                    {section.title === 'Featured Blog Posts' && '⭐'}
                    {section.title === 'Recent Writings' && '📝'}
                    {section.title === 'Legal Pages' && '⚖️'}
                  </div>
                  <div className="font-semibold text-sm mb-1">{section.title}</div>
                  <div className="text-xs text-muted-foreground">{section.links.length} pages</div>
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap Sections */}
          <div className="space-y-8">
            {sitemapSections.map((section, sectionIndex) => (
              <section
                key={section.title}
                id={section.title.toLowerCase().replace(/\s+/g, '-')}
                className="scroll-mt-24"
              >
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  <span className="ml-3 px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {section.links.length}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.links.map((link, linkIndex) => (
                    <div
                      key={link.href}
                      className="bg-card border rounded-lg p-4 hover:shadow-md transition-all duration-200 group"
                    >
                      <Link
                        href={link.href}
                        className="block group-hover:text-blue-600 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              {link.icon && (
                                <span className="text-lg mr-2">{link.icon}</span>
                              )}
                              <h3 className="font-semibold text-lg leading-tight">
                                {link.label}
                              </h3>
                            </div>
                            {link.description && (
                              <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                                {link.description}
                              </p>
                            )}
                            {link.category && (
                              <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                {link.category}
                              </span>
                            )}
                          </div>
                          <svg
                            className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you couldn't find the page or information you were looking for, 
                feel free to reach out directly. I'm always happy to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Contact Me
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
                <Link
                  href="/posts"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
                >
                  Browse All Articles
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9m0 0a2 2 0 01-2-2V3a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>
              Sitemap last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
            <p className="mt-1">
              © {currentYear} {siteConfig.personal.name}. All rights reserved.
            </p>
          </div>

          {/* Back to Top */}
          <div className="text-center mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}