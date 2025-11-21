export const navigationConfig = {
  mainNav: [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { 
      label: 'Categories', 
      href: '/categories',
      dropdown: [
        { label: 'Technology', href: '/categories/technology' },
        { label: 'Digital Culture', href: '/categories/digital-culture' },
        { label: 'Content Creation', href: '/categories/content-creation' },
        { label: 'Personal Growth', href: '/categories/personal-growth' },
        { label: 'AI & Future Tech', href: '/categories/ai-future-tech' }
      ]
    },
    { label: 'About', href: '/about' },
    { label: 'Newsletter', href: '/newsletter' },
    { label: 'Contact', href: '/contact' }
  ],
  
  footerNav: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Sitemap', href: '/sitemap' }
  ],
  
  socialNav: [
    { label: 'Twitter', href: 'https://twitter.com/nooraziz', icon: 'twitter' },
    { label: 'Instagram', href: 'https://instagram.com/nooraziz', icon: 'instagram' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/nooraziz', icon: 'linkedin' },
    { label: 'Medium', href: 'https://medium.com/@nooraziz', icon: 'medium' },
    { label: 'YouTube', href: 'https://youtube.com/@nooraziz', icon: 'youtube' }
  ]
};