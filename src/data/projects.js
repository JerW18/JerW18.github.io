/**
 * projects.js — Portfolio project data
 *
 * `projects`      — featured work, rendered as full detail cards.
 * `otherProjects` — compact one-line entries listed beneath the featured grid.
 *
 * `category` takes either a single string ('Backend') or several
 * (['AI/ML', 'NLP']). Colors for each live in CATEGORY_STYLES in
 * components/ProjectCard.jsx — add an entry there for any new category,
 * otherwise it renders in plain chrome styling.
 */
export const projects = [
  {
    id: 1,
    title: 'HKGAI-V1 Intelligent Search System',
    description:
      'LLM-powered multi-source intelligent search platform with advanced query processing, semantic retrieval, and Vision AI capabilities.',
    features: [
      'LLM-driven multi-source search platform',
      'Automatic query intent classification & sub-query decomposition',
      'Semantic search using FAISS with multilingual-e5 embeddings',
      'BM25 reranking with deduplication and metadata preservation',
      'Flask REST API integrating 5+ data sources: web search, finance, weather, transport',
      'Multimodal vision AI including OCR and image-to-text',
    ],
    tech: ['Python', 'Flask', 'FAISS', 'multilingual-e5', 'LLM', 'BM25', 'OpenCV', 'ONNX'],
    github: 'https://github.com/JerW18/hkgai-v1-intelligent-search',
    live: null,
    category: ['AI/ML', 'NLP']
  },
  {
    id: 2,
    title: 'Distributed Fault Tolerance Online Enrollment System',
    description:
      'Service-oriented online enrollment system built in C#, designed to stay functional when an individual service goes down.',
    features: [
      'Service-oriented architecture with Authentication, Courses, and Grades on separate nodes',
      'JWT-based authentication across services',
      'MVC view layer running on a dedicated node',
      'System remains functional even if one service fails',
      'RESTful API layer between nodes',
    ],
    tech: ['C#', '.NET', 'JWT', 'SQL', 'REST API', 'MVC'],
    github: 'https://github.com/JerW18/STDISCM-Distributed-Fault-Tolerance',
    live: null,
    category: ['Backend', 'Distributed Systems']
  },
]

/**
 * Smaller academic / personal builds — rendered as a compact list.
 * `github` is null where no public repository is available.
 */
export const otherProjects = [
  {
    id: 3,
    title: 'Networked Producer-Consumer Media Upload System',
    blurb:
      'Multithreaded producer streams video files over TCP to a consumer with a bounded queue; GUI with FFmpeg-based 10-second hover preview and full playback, deployed cross-machine.',
    tech: ['C#', 'TCP', 'FFmpeg', 'Multithreading'],
    github: null,
  },
  {
    id: 4,
    title: 'GroupSync: Multithreaded Dungeon Party Matcher',
    blurb:
      'Concurrent player assignment to dungeon instances (tanks / healers / DPS) using sync primitives, configurable via config file.',
    tech: ['C++', 'Concurrency', 'Sync Primitives'],
    github: null,
  },
  {
    id: 5,
    title: 'Multithreaded Prime Finder',
    blurb:
      'Static and dynamic partitioning strategies compared across real-time versus deferred aggregation.',
    tech: ['C++', 'Multithreading'],
    github: null,
  },
  {
    id: 6,
    title: 'Lab Reservation System',
    blurb:
      'Role-based access for students and admins, full CRUD with a day-before cutoff and admin overrides, deployed on Render.',
    tech: ['Node.js', 'Express', 'EJS', 'MongoDB'],
    github: null,
  },
  {
    id: 7,
    title: 'Image Processing Web App',
    blurb:
      'Edge detection on uploaded images with automatic resize to 1080p, deployed on DigitalOcean.',
    tech: ['Flask', 'OpenCV DNN', 'HED Caffe'],
    github: null,
  },
  {
    id: 8,
    title: 'File Exchange System',
    blurb:
      'Multi-client server supporting register, upload, download, and list operations.',
    tech: ['Python', 'TCP', 'UDP'],
    github: null,
  },
]
