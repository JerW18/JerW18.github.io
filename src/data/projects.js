/**
 * projects.js — Portfolio project data
 * Update this file to add / remove / edit projects shown on the site.
 */
export const projects = [
  {
    id: 1,
    title: 'HKGAI-V1 Intelligent Search System',
    description:
      'LLM-powered multi-source intelligent search platform with advanced query processing, semantic retrieval, and Vision AI capabilities.',
    features: [
      'LLM-powered multi-source search',
      'Query intent classification & sub-query decomposition',
      'Semantic search using FAISS vector database',
      'BM25 reranking for improved relevance',
      'Flask REST API backend',
      'Vision AI features including OCR',
    ],
    tech: ['Python', 'Flask', 'FAISS', 'LLM', 'OpenCV', 'ONNX', 'BM25'],
    github: 'https://github.com/JerW18/hkgai-v1-intelligent-search',
    live: null,
    category: 'AI/ML',
  },
  {
    id: 2,
    title: 'Distributed Fault-Tolerant Enrollment System',
    description:
      'Enterprise-grade distributed online enrollment system with fault tolerance, JWT authentication, and a microservice architecture built in C#.',
    features: [
      'Distributed microservice architecture',
      'MVC pattern with C# / .NET',
      'JWT-based authentication service',
      'Separate services: auth, courses, grades',
      'Fault-tolerant design with health checks',
      'RESTful API layer',
    ],
    tech: ['C#', '.NET', 'JWT', 'SQL', 'REST API', 'MVC'],
    github: 'https://github.com/JerW18/STDISCM-Distributed-Fault-Tolerance',
    live: null,
    category: 'Backend',
  },
  {
    id: 3,
    title: 'Portable Image Enhancement Pipeline for Smartphones',
    description:
      'A five-stage mobile image enhancement pipeline achieving <5% SSIM degradation vs. desktop baselines. Published at the 31st International Conference on Mechatronics and Machine Vision in Practice (M2VIP 2025).',
    features: [
      'Five-stage pipeline: Capture, Reduce, Process, Post-process, Save',
      'Multi-image super-resolution on resource-constrained devices',
      'Dehazing and shadow removal techniques',
      'Unified framework for deploying multiple enhancement algorithms',
      '<5% degradation in structural similarity vs. desktop baselines',
    ],
    tech: ['Kotlin', 'C++', 'OpenCV', 'ONNX', 'Super-Resolution', 'Dehazing', 'Shadow Removal', 'Image Processing'],
    github: null,
    live: 'https://ieeexplore.ieee.org/document/11165605',
    category: 'AI/ML',
  },
]
