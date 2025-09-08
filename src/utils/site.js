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
    demoUrl: 'https://thecountycooperage.com',
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
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express'],
    images: ['/images/projects/lumacrm/logo.svg'],
    featured: true,
  },
  {
    id: 'gottago-ottawa',
    name: 'Gottago Ottawa',
    description:
      'Ottawa public washroom finder application with real-time location services, ratings, and accessibility information.',
    technologies: ['Vue.js', 'Google Maps API', 'JavaScript'],
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
  },
  {
    id: 'word-scramble',
    name: 'Word Scramble Game',
    description: 'Interactive word puzzle game with multiple difficulty levels and score tracking.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    images: ['/images/projects/word_scramble/wordscramble.svg'],
  },
  {
    id: 'pomodoro-timer',
    name: 'Pomodoro Timer',
    description:
      'Productivity timer application with customizable work/break intervals and task tracking.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    images: ['/images/projects/timer/timer1.png'],
  },
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
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Secure password generation tool with customizable length and character sets.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    images: ['/images/projects/password_generator/password_generator1.png'],
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
  { name: 'GitHub', url: 'https://github.com/jessegauthier', icon: 'github', external: true },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/jessegauthier',
    icon: 'linkedin',
    external: true,
  },
  { name: 'Email', url: 'mailto:jesse@jessegauthier.dev', icon: 'email', external: true },
]
