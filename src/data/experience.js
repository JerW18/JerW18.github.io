/**
 * experience.js — Work experience and education data
 * Timeline items are rendered newest-first in the Experience section.
 */

export const experiences = [
  {
    id: 0,
    role: 'AI Research and Development Intern',
    company: 'VX Real Limited',
    period: 'June 2026 - Aug 2026',
    location: 'Hong Kong',
    description: [
      'Benchmarked 11 open-source VLMs and OCR engines on implicit information extraction and cross-field reasoning using a self-built document-QA benchmark',
      'Designed a reasoning-centric SFT+GRPO fine-tuning pipeline that improved answer accuracy by 15% on a self-made benchmark, without regressing accuracy on other tasks',
    ],
    tech: ['Python', 'VLM', 'OCR', 'SFT', 'GRPO', 'Benchmarking'],
    links: [],
  },
  {
    id: 1,
    role: 'Freelance Web Developer',
    company: null,
    period: 'April 2024 - Present',
    location: 'Manila, Philippines',
    description: [
      'Created end-to-end Shopify and WordPress websites for clients across retail, fashion, and academic sectors, collectively serving 800+ users monthly',
      'Managed full project lifecycle independently, from client requirements gathering to deployment and post-launch support',
      'Built and optimised e-commerce features including booking systems, membership programs, and promotional tools, contributing to a 60% revenue increase and 15% rise in repeat bookings for key clients',
      'Applied SEO best practices, responsive design, and analytics integration, reducing bounce rate by 25% and improving organic search visibility across client storefronts',
    ],
    tech: [],
    links: [],
    clients: [
      {
        name: 'Aecia Dress Rental',
        description: [
          'Built a full-featured Shopify storefront for a dress rental business',
          'Developed custom Liquid templates for brand-aligned storefronts',
          'Customised backend features to streamline rental booking workflows',
        ],
        tech: ['Shopify', 'Liquid', 'HTML', 'CSS'],
        links: [{ label: 'aeciastudio.com', url: 'https://aeciastudio.com/' }],
      },
      {
        name: 'Soulay.ph Clothing Brand',
        description: [
          'Built a full Shopify ecommerce storefront from scratch for a lifestyle clothing brand',
          'Improved accessibility and ensured a seamless cross-device UX',
          'Integrated Shopify payment gateway and inventory management',
        ],
        tech: ['Shopify', 'Liquid', 'HTML', 'CSS'],
        links: [{ label: 'soulayph.com', url: 'https://www.soulayph.com/' }],
      },
      {
        name: 'M2VIP 2024 - DLSU',
        description: [
          'Built the official site for the 31st International Conference on Mechatronics and Machine Vision in Practice',
          'Implemented responsive layout for an international audience across devices',
          'Delivered a registration, program schedule, and call-for-papers system',
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'WordPress'],
        links: [{ label: 'm2vip.dlsu.edu.ph', url: 'https://m2vip.dlsu.edu.ph/' }],
      }
    ],
  },
  {
    id: 2,
    role: 'Programming Intern',
    company: 'VISON Technologies',
    period: 'May 2024 - Jul 2024',
    location: 'Manila, Philippines',
    description: [
      'Developed a responsive website using HTML, CSS, and JavaScript',
      'Assisted in the research and development of image stitching algorithms for underwater imagery',
      'Applied OpenCV and Python to implement stitching techniques and enhance overall image quality',
      'Collaborated with senior developers to optimise code efficiency and improve algorithm performance',
    ],
    tech: ['Python', 'OpenCV', 'HTML', 'CSS', 'JavaScript'],
    links: [],
  },
  {
    id: 3,
    role: 'Web Developer',
    company: 'The LaSallian - DLSU',
    period: 'Oct 2022 - Jul 2024',
    location: 'Manila, Philippines',
    description: [
      'Developed and maintained websites using HTML, CSS, JavaScript, and related web technologies',
      'Collaborated with designers to implement UI/UX designs, ensuring a user-friendly interface',
      'Utilised Git and GitHub for version control, team collaboration, and repository management',
      'Worked with 2-3 staffers to design and launch two interactive web specials',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Git', 'GitHub'],
    links: [
      { label: 'brothers.thelasallian.com', url: 'https://brothers.thelasallian.com/' },
      { label: 'se2023.thelasallian.com',   url: 'https://se2023.thelasallian.com/' },
    ],
  },
]

export const education = [
  {
    id: 1,
    degree: 'MSc Artificial Intelligence',
    major: null,
    school: 'Hong Kong University of Science and Technology',
    shortName: 'HKUST',
    period: 'Sept 2025 - Oct 2026',
    location: 'Hong Kong',
    honors: null,
    current: true,
    status: 'Graduating Oct 2026',
  },
  {
    id: 2,
    degree: 'BS Computer Science',
    major: 'Major in Software Technology',
    school: 'De La Salle University - Manila',
    shortName: 'DLSU',
    period: 'Oct 2021 - Aug 2025',
    location: 'Manila, Philippines',
    honors: 'Cum Laude',
    current: false,
    status: null,
  },
]
