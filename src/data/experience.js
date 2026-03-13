/**
 * experience.js — Work experience and education data
 * Timeline items are rendered newest-first in the Experience section.
 */

export const experiences = [
  {
    id: 1,
    role: 'Freelance Web Developer',
    company: null,
    period: '2024 - Present',
    location: 'Remote',
    description: [],
    tech: [],
    links: [],
    clients: [
      {
        name: 'Aecia Dress Rental',
        description: [
          'Built a full-featured Shopify store now serving 200+ customers monthly',
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
      'Developed responsive web pages adhering to modern UI/UX standards',
      'Researched image stitching algorithms for underwater imagery processing',
      'Implemented computer vision pipelines using Python and OpenCV',
      'Optimised algorithm performance for near-real-time underwater image analysis',
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
      'Built and maintained the university publication\'s news and feature websites',
      'Collaborated with editors and designers to deliver pixel-perfect layouts',
      'Managed codebase workflows with Git and GitHub',
      'Delivered two major sub-sites: De La Salle Brothers Website & Special Elections 2023',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Git', 'GitHub'],
    links: [],
  },
]

export const education = [
  {
    id: 1,
    degree: 'MSc Artificial Intelligence',
    major: null,
    school: 'Hong Kong University of Science and Technology',
    shortName: 'HKUST',
    period: '2025 - 2026',
    location: 'Hong Kong SAR',
    current: true,
  },
  {
    id: 2,
    degree: 'BS Computer Science',
    major: 'Major in Software Technology',
    school: 'De La Salle University - Manila',
    shortName: 'DLSU',
    period: '2021 - 2025',
    location: 'Manila, Philippines',
    current: false,
  },
]
