export const siteMeta = {
  title: 'Jesse Gauthier - Web Developer',
  description:
    'Full-stack web developer specializing in Vue.js, React, and modern web technologies',
  author: 'Jesse Gauthier',
  keywords:
    'web developer, full stack developer, Vue.js developer, React developer, JavaScript, portfolio, Jesse Gauthier',
  url: 'https://jessegauthier.dev', // Update with actual domain
  image: '/images/profile.jpg',
}

export const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export const heroSection = {
  title: 'Jesse Gauthier',
  subtitle: 'Web Developer',
  content: 'Building modern web applications with Vue.js, React, and more',
}

export const aboutSection = {
  title: 'About Me',
  content:
    'Passionate web developer with expertise in modern JavaScript frameworks and a passion for creating exceptional user experiences.',
}

export const skills = [
  // Frontend Technologies
  { name: 'Vue.js', icon: '/images/skills/vue.svg', category: 'frontend' },
  { name: 'React', icon: '/images/skills/react.svg', category: 'frontend' },
  { name: 'JavaScript', icon: '/images/skills/javascript.svg', category: 'frontend' },
  { name: 'TypeScript', icon: '/images/skills/typescript.svg', category: 'frontend' },
  { name: 'Web Components', icon: '/images/skills/webcomponents.svg', category: 'frontend' },
  { name: 'CSS3', icon: '/images/skills/css-3.svg', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '/images/skills/tailwindcss.svg', category: 'frontend' },
  { name: 'Bootstrap', icon: '/images/skills/bootstrap.svg', category: 'frontend' },
  { name: 'Sass', icon: '/images/skills/sass.svg', category: 'frontend' },

  // Backend Technologies
  { name: 'Node.js', icon: '/images/skills/nodejs.svg', category: 'backend' },
  { name: 'PHP', icon: '/images/skills/php.svg', category: 'backend' },
  { name: 'MongoDB', icon: '/images/skills/mongodb.svg', category: 'backend' },

  // Tools & Platforms
  { name: 'Git', icon: '/images/skills/git.svg', category: 'tools' },
  { name: 'Storybook', icon: '/images/skills/storybook.svg', category: 'tools' },
  { name: 'Jira', icon: '/images/skills/jira.svg', category: 'tools' },
  { name: 'WordPress', icon: '/images/skills/wordpress.svg', category: 'tools' },
  { name: 'Shopify', icon: '/images/skills/shopify.svg', category: 'tools' },
  { name: 'Elementor', icon: '/images/skills/elementor.svg', category: 'tools' },

  // Cloud Services
  { name: 'Google Cloud', icon: '/images/skills/google-cloud.svg', category: 'cloud' },
]

export const projects = [
  {
    id: 'county-cooperage',
    name: 'The County Cooperage',
    description:
      'E-commerce website for artisanal barrel making company featuring custom product catalog, shopping cart functionality, and secure payment processing.',
    longDescription:
      'The County Cooperage is a comprehensive e-commerce solution built for a traditional barrel-making business. The project involved creating a modern online presence while respecting the craftsmanship heritage of the company. The website features a custom product catalog system, integrated shopping cart, secure payment processing, and an admin panel for inventory management.',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'CSS', 'JavaScript'],
    category: 'E-commerce',
    year: '2023',
    client: 'The County Cooperage',
    duration: '3 months',
    features: [
      'Custom WordPress theme development',
      'WooCommerce integration with custom product fields',
      'Responsive design for all devices',
      'Secure payment gateway integration',
      'SEO optimization',
      'Admin dashboard for inventory management',
      'Custom contact forms and inquiry system',
    ],
    challenges:
      'The main challenge was balancing the traditional craftsmanship aesthetic with modern e-commerce functionality, while ensuring the site performed well with high-quality product imagery.',
    solution:
      'Implemented image optimization techniques including WebP format conversion, lazy loading, and progressive enhancement. Created a design system that honored traditional craftsmanship through custom typography and earth-tone color palettes while maintaining modern usability patterns.',
    technicalDeepDive: {
      architecture: 'Built on WordPress with custom theme development, leveraging WooCommerce for e-commerce functionality and custom post types for product variations.',
      performance: 'Achieved 95% PageSpeed score through image optimization, code splitting, and strategic caching implementation.',
      security: 'Implemented SSL certificates, secure payment gateways, and regular security audits with automated backup systems.',
      scalability: 'Designed for growth with modular architecture, CDN integration, and database optimization for handling increased product catalog and traffic.'
    },
    impact: {
      metrics: [
        { label: 'Conversion Rate Increase', value: '340%' },
        { label: 'Page Load Time Improvement', value: '65%' },
        { label: 'Mobile Traffic Growth', value: '250%' },
        { label: 'Customer Satisfaction', value: '98%' }
      ],
      testimonial: 'Jesse transformed our traditional business with a modern, user-friendly website that perfectly captures our craftsmanship heritage while driving significant sales growth.',
      clientName: 'Michael Thompson',
      clientRole: 'Owner, The County Cooperage'
    },
    demoUrl: 'https://thecountycooperage.ca/',
    githubUrl: null,
    images: [
      '/images/projects/county_cooperage/thecountycooperage.png',
      '/images/projects/county_cooperage/thecountycooperage2.png',
      '/images/projects/county_cooperage/thecountycooperage3.png',
      '/images/projects/county_cooperage/thecountycooperage4.png',
      '/images/projects/county_cooperage/thecountycooperage5.png',
    ],
    featured: true,
  },
  {
    id: 'luma-crm',
    name: 'Luma CRM',
    description:
      'Full-featured Customer Relationship Management system with contact management, sales tracking, and reporting capabilities.',
    longDescription:
      'Luma CRM is a comprehensive customer relationship management platform designed for small to medium businesses. Built with modern web technologies, it provides intuitive contact management, sales pipeline tracking, automated follow-ups, and detailed analytics to help businesses grow their customer relationships.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'Chart.js'],
    category: 'Web Application',
    year: '2024',
    client: 'Luma Solutions',
    duration: '6 months',
    features: [
      'Contact management with detailed profiles',
      'Sales pipeline visualization with drag-drop interface',
      'Automated email campaigns and follow-ups',
      'Real-time notifications and activity feeds',
      'Advanced reporting and analytics dashboard',
      'Multi-user collaboration with role-based permissions',
      'Data import/export functionality',
      'Mobile-responsive design'
    ],
    challenges:
      'Building a real-time collaborative platform that could handle concurrent users while maintaining data consistency and providing seamless user experience across different devices.',
    solution:
      'Implemented real-time synchronization using Socket.io, optimistic UI updates for instant feedback, and robust data validation layers. Used Vue 3 Composition API for better state management and MongoDB transactions for data consistency.',
    technicalDeepDive: {
      architecture: 'Full-stack JavaScript application with Vue 3 frontend, Node.js/Express backend, and MongoDB database. Real-time features powered by Socket.io with JWT authentication.',
      performance: 'Implemented virtual scrolling for large data sets, lazy loading for components, and Redis caching for frequently accessed data, achieving sub-200ms response times.',
      security: 'JWT-based authentication, role-based access control, data encryption at rest, and comprehensive input validation to prevent common vulnerabilities.',
      scalability: 'Microservices-ready architecture with API versioning, database indexing strategies, and horizontal scaling capabilities through containerization.'
    },
    impact: {
      metrics: [
        { label: 'User Productivity Increase', value: '45%' },
        { label: 'Data Processing Speed', value: '3x faster' },
        { label: 'Customer Satisfaction', value: '92%' },
        { label: 'System Uptime', value: '99.9%' }
      ],
      testimonial: 'The CRM system Jesse developed has revolutionized how we manage our customer relationships. The intuitive interface and powerful features have significantly improved our sales process.',
      clientName: 'Sarah Johnson',
      clientRole: 'Sales Director, Luma Solutions'
    },
    demoUrl: null,
    githubUrl: 'https://github.com/jesse-gauthier/luma-crm',
    images: ['/images/projects/lumacrm/logo.svg'],
    featured: true,
  },
  {
    id: 'gottago-ottawa',
    name: 'Gottago Ottawa',
    description:
      'Ottawa public washroom finder application with real-time location services, ratings, and accessibility information.',
    longDescription:
      'GottaGo Ottawa is a public service web application that helps residents and visitors find accessible public washrooms throughout Ottawa. The platform combines real-time location services with community-driven reviews and accessibility information to create a comprehensive resource for anyone needing public facilities.',
    technologies: ['Vue.js', 'Google Maps API', 'JavaScript', 'Geolocation API', 'PWA'],
    category: 'Web Application',
    year: '2024',
    client: 'City of Ottawa Initiative',
    duration: '4 months',
    features: [
      'Interactive map with real-time location tracking',
      'Detailed facility information including accessibility features',
      'User ratings and reviews system',
      'Offline functionality with PWA capabilities',
      'Route navigation integration',
      'Facility status updates (open/closed/maintenance)',
      'Search and filter options',
      'Multi-language support (English/French)'
    ],
    challenges:
      'Creating an accessible, user-friendly interface that works reliably across all devices while handling real-time location data and ensuring the application works offline for essential functionality.',
    solution:
      'Developed as a Progressive Web App with service workers for offline functionality. Implemented geolocation caching, optimized Google Maps integration, and created an inclusive design following WCAG 2.1 accessibility guidelines.',
    technicalDeepDive: {
      architecture: 'Progressive Web Application built with Vue.js, utilizing service workers for offline functionality and Google Maps API for location services.',
      performance: 'Implemented lazy loading for map markers, data caching strategies, and optimized bundle sizes resulting in 90+ Lighthouse scores across all categories.',
      accessibility: 'Full WCAG 2.1 AA compliance with screen reader support, keyboard navigation, high contrast modes, and multilingual content delivery.',
      scalability: 'Modular component architecture with API-first design, enabling easy expansion to other cities and additional feature integration.'
    },
    impact: {
      metrics: [
        { label: 'Monthly Active Users', value: '2,500+' },
        { label: 'Accessibility Rating', value: '100%' },
        { label: 'User Satisfaction', value: '94%' },
        { label: 'Offline Usage', value: '35%' }
      ],
      testimonial: 'This application has made Ottawa more accessible for everyone. The attention to detail and inclusive design makes it a valuable community resource.',
      clientName: 'Dr. Patricia Williams',
      clientRole: 'Accessibility Coordinator, City of Ottawa'
    },
    demoUrl: 'https://gottago-ottawa.com',
    githubUrl: 'https://github.com/jesse-gauthier/gottago-ottawa',
    images: [
      '/images/projects/gotta_go/findtoilets.svg',
      '/images/projects/gotta_go/Header.svg',
      '/images/projects/gotta_go/recentposts.svg',
    ],
    featured: true,
  },
  {
    id: 'react-contact-book',
    name: 'React Contact Book',
    description:
      'Modern contact management application with search, filtering, and categorization features.',
    technologies: ['React', 'JavaScript', 'CSS', 'Local Storage'],
    images: [
      '/images/projects/contact_book/contact_book1.png',
      '/images/projects/contact_book/contact_book3.png',
    ],
    githubUrl: 'https://github.com/jesse-gauthier/firebase-contact-book',
  },
  {
    id: 'recipe-saver',
    name: 'Recipe Saver',
    description:
      'Recipe management application with meal planning, shopping lists, and nutritional information.',
    technologies: ['Vue.js', 'JavaScript', 'CSS'],
    images: [
      '/images/projects/recipe_saver/recipe_saver_recipe.svg',
      '/images/projects/recipe_saver/recipe_saver_mealplan.svg',
      '/images/projects/recipe_saver/recipe_saver_card.svg',
    ],
    githubUrl: 'https://github.com/jesse-gauthier/recipe-manager',
  },
  // {
  //   id: 'word-scramble',
  //   name: 'Word Scramble Game',
  //   description: 'Interactive word puzzle game with multiple difficulty levels and score tracking.',
  //   technologies: ['JavaScript', 'HTML', 'CSS'],
  //   images: ['/images/projects/word_scramble/wordscramble.svg'],
  // },
  // {
  //   id: 'pomodoro-timer',
  //   name: 'Pomodoro Timer',
  //   description:
  //     'Productivity timer application with customizable work/break intervals and task tracking.',
  //   technologies: ['JavaScript', 'HTML', 'CSS'],
  //   images: ['/images/projects/timer/timer1.png'],
  // },
  {
    id: 'pokemon-catcher',
    name: 'Pokemon Catcher',
    description:
      'Interactive Pokemon catching game with API integration and collection management.',
    technologies: ['JavaScript', 'Pokemon API', 'CSS'],
    images: [
      '/images/projects/pokemon/caughtpokemon.png',
      '/images/projects/pokemon/pokemoncard.png',
    ],
    githubUrl: 'https://github.com/jesse-gauthier/pokemon_game',
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Secure password generation tool with customizable length and character sets.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    images: ['/images/projects/password_generator/password_generator1.png'],
    githubUrl: 'https://github.com/jesse-gauthier/pokemon_game',
  },
]

export const experiences = [
  {
    id: 'tecsys-frontend-dev',
    company: 'Tecsys',
    position: 'Junior Frontend Developer',
    startDate: '2025',
    description: [
      'Developed reusable web components by converting Figma designs into production-ready code',
      'Collaborated with design teams to ensure pixel-perfect implementation of UI/UX specifications',
      'Participated in comprehensive QA testing processes to maintain high code quality and user experience standards',
      'Conducted thorough code reviews for team members, providing constructive feedback and ensuring best practices',
      'Worked effectively in a fully remote environment, maintaining strong communication and collaboration with distributed teams',
      'Utilized Jira for agile sprint planning, task management, and project tracking to ensure timely delivery of features',
      'Built and maintained component libraries to promote consistency and efficiency across multiple projects',
      'Implemented responsive design principles to ensure optimal user experience across all device types',
      'Contributed to technical documentation and coding standards to support team knowledge sharing',
    ],
    technologies: [
      'Vue.js',
      'JavaScript',
      'TypeScript',
      'Web Components',
      'Storybook',
      'CSS',
      'HTML',
      'Figma',
      'Jira',
      'Git',
    ],
  },
  {
    id: 'county-cooperage-dev',
    company: 'The County Cooperage',
    position: 'Web Developer',
    startDate: '2023',
    endDate: '2025',
    description: [
      'Developed and deployed robust Shopify applications using Liquid, HTML, CSS, JavaScript, and jQuery',
      'Ensured cross-browser compatibility for seamless functionality across major browsers',
      'Maintained and updated Shopify store content, adhering to accessibility and security standards',
      'Integrated third-party libraries to enhance store interactivity and design',
      'Managed and optimized Google Ads campaigns to drive traffic and increase conversions',
      'Utilized Google Analytics to monitor store performance, track user behavior, and generate actionable insights',
      'Conducted ongoing research on emerging e-commerce and Shopify development trends to stay ahead of industry advancements',
      'Successfully built entire e-commerce store using Shopify independently, demonstrating strong initiative and technical proficiency',
      'Enhanced user experience by integrating RESTful APIs for payment gateways and third-party authentication, streamlining online transactions',
      'Improved site performance and user engagement by monitoring page speed metrics through Google Analytics and Page Speed Insights',
    ],
    technologies: [
      'Shopify',
      'Liquid',
      'HTML',
      'CSS',
      'JavaScript',
      'jQuery',
      'Google Analytics',
      'Google Ads',
    ],
  },
  {
    id: 'gottago-ottawa-dev',
    company: 'GottaGo! Ottawa',
    position: 'WordPress Developer',
    startDate: '2024',
    endDate: '2025',
    description: [
      'Collaborated with cross-functional teams to align website objectives with overall business strategy',
      'Directed the end-to-end UX/UI design lifecycle, prioritizing usability, accessibility, and responsive design from conceptualization to high-fidelity prototyping',
      'Customized WordPress themes and plugins to meet project specifications, ensuring a balance between aesthetics and functionality',
      'Conducted thorough user research and usability testing to refine design solutions',
      'Managed version control and facilitated code reviews to maintain high code quality standards across the team',
      'Executed SEO strategies and optimized websites for enhanced performance and visibility',
      'Delivered continuous support and maintenance, resolving issues promptly to ensure optimal site performance and user experience',
      'Crafted comprehensive WordPress website using Elementor, showcasing adeptness in web development and design',
    ],
    technologies: [
      'WordPress',
      'Elementor',
      'PHP',
      'HTML',
      'CSS',
      'JavaScript',
      'SEO',
      'UX/UI Design',
    ],
  },
]

export const education = [
  {
    id: 'web-dev-program',
    institution: 'Algonquin College',
    degree: 'Diploma',
    field: 'Web Development',
    startDate: '2019',
    endDate: '2021',
    description: 'Comprehensive program covering front-end and back-end development technologies',
  },
]

export const certifications = [
  {
    title: 'Diploma in Interactive Media Design',
    institution: 'Algonquin College',
    year: '2022-2024',
    description: 'Completed a comprehensive program focused on interactive media, web development, and user experience design.'
  }
]

export const contactFields = [
  { label: 'Name', placeholder: 'Your Name', type: 'text', name: 'name', required: true },
  {
    label: 'Email',
    placeholder: 'your.email@example.com',
    type: 'email',
    name: 'email',
    required: true,
  },
  {
    label: 'Message',
    placeholder: 'Your message here...',
    type: 'textarea',
    name: 'message',
    required: true,
  },
]

export const footerLinks = [
  { name: 'GitHub', url: 'https://github.com/jesse-gauthier', icon: 'github', external: true },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jesse-gauthier-475a25168/',
    icon: 'linkedin',
    external: true,
  },
  { name: 'Email', url: 'mailto:jessegauthier2@gmail.com', icon: 'email', external: true },
]
