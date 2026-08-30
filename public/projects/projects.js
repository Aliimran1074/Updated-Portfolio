/**
 * PLACEHOLDER PROJECT DATA
 * ------------------------
 * Everything in this file is a placeholder for you to replace with your
 * real projects. Nothing here should be presented as real work experience.
 *
 * To add a project: copy an existing object, give it a unique `id`, and
 * fill in your details. `image` should point to a screenshot in /public
 * (e.g. "/projects/my-project.png"); if the file is missing, the project
 * card automatically falls back to a generated placeholder graphic, so the
 * site never shows a broken image.
 *
 * `caseStudy` fields are optional — omit the whole field/section on a
 * project to hide that part of the detail modal.
 */

export const projects = [
  {
    id: 'ai-lms',
    title: 'A Multi Agent Learning Management System for Educational Operational',
    tagline: 'AI-Powered Agents Transforming Educational Operations',
    image: '/projects/multi_agent_pic.png',
    description:
      'A multi-agent AI-powered learning management system that automates educational operations, supports students and teachers, and delivers personalized learning through intelligent AI agents.',
    problem:
      'Traditional educational systems rely heavily on manual processes, making academic management time-consuming, inefficient, and difficult to scale. This project was created to automate these operations using multiple AI agents and provide smarter support for students, teachers, and institutions.',
    solution:
      'The system uses multiple specialized AI agents to automate educational tasks such as student assistance, mentorship, exam generation, assignment management, and evaluation—reducing manual workload while improving efficiency and learning outcomes.',
    features: [
      'Multi-Institute Management',
'Role-Based Access Control',
'AI Assignment & Quiz Generation',
'AI Assignment & Quiz Evaluation',
'Subscription & AI Usage Tracking'
    ],
    architecture:
      'MERN + Agentic AI + REST API + SaaS Architecture',
    technologies: ['React', 'Node/Express JS', 'Cron Job', 'OpenAI API', 'MongoDB', 'Generative AI', 'Agentic AI'],
    github: 'https://github.com/Aliimran1074/MultiAgentLearningManagementSystemForEducationalOperations',
    liveDemo: 'https://super-admin-dashboard-frontend.vercel.app/',
    caseStudy: '#',
  },
  {
    id: 'rag-doc-intelligence',
    title: 'RAG Document Intelligence System',
    tagline: 'Placeholder project — replace with your real build',
    image: '/projects/rag-doc-intelligence.png',
    description:
      'Upload documents and ask questions about them in plain language, with answers grounded in retrieved passages instead of the model\u2019s general knowledge.',
    problem:
      'Searching long documents (PDFs, reports, manuals) for a specific answer is slow, and general-purpose chat models can\u2019t reliably answer questions about content they were never shown.',
    solution:
      'Built a retrieval-augmented generation pipeline: documents are parsed and chunked, embedded into a vector store, and relevant chunks are retrieved and passed to the LLM as context for each question, with citations back to the source passage.',
    features: [
      'Drag-and-drop document upload and parsing',
      'Chunking and embedding pipeline for semantic search',
      'Source-cited answers instead of unsourced claims',
      'Multi-document question answering in one session',
    ],
    architecture:
      'Documents are processed and embedded, then stored in a vector database for semantic search. A FastAPI backend handles retrieval and prompt assembly, and a React front end presents the chat interface with inline source references.',
    technologies: ['Python', 'FastAPI', 'LangChain', 'Vector Database', 'React'],
    github: '#',
    liveDemo: '#',
    caseStudy: '#',
  },
  {
    id: 'agentic-research-assistant',
    title: 'Agentic AI Research Assistant',
    tagline: 'Placeholder project — replace with your real build',
    image: '/projects/agentic-research-assistant.png',
    description:
      'An AI agent workflow that researches a topic, analyzes what it finds, and produces a structured written response rather than a single generic answer.',
    problem:
      'A single LLM call struggles with multi-step research tasks: it can\u2019t plan, search for evidence, evaluate what it finds, and only then write a considered answer.',
    solution:
      'Built a graph-based agent workflow that plans a research approach, calls tools to gather information, reflects on the findings, and assembles a structured, well-organized final response.',
    features: [
      'Multi-step planning before any output is generated',
      'Tool-calling for information gathering',
      'Reflection step to check findings before writing',
      'Structured, section-based final report output',
    ],
    architecture:
      'Implemented as a directed graph of nodes (plan \u2192 gather \u2192 reflect \u2192 write) using LangGraph, with each node a focused LLM call or tool call. State is passed between nodes so the agent can revise its plan based on what it finds.',
    technologies: ['Python', 'LangGraph', 'LangChain', 'Tool Calling', 'Streamlit'],
    github: '#',
    liveDemo: '#',
  },
]
