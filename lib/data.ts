import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'bhavithshetty2203@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Bhavith, I am reaching out to you because...',

  
    upworkProfile: 'https://www.upwork.com/freelancers/tajmirul',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Tajmirul' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/tajmirul' }
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
  {
    title: 'VStudy',
    slug: 'vstudy',
    year: 2025,
    liveUrl: '',
    description: `
    VStudy is a full-stack productivity platform designed to help students build focus, consistency, and academic discipline through structured tools and analytics. <br/><br/>

    Key Features:
    <ul>
      <li>📅 Smart Study Dashboard with task tracking and progress insights</li>
      <li>⏱️ Pomodoro Timer with focus sessions and break management</li>
      <li>📝 Subject-based quizzes and mini tests</li>
      <li>📊 Progress Analytics to visualize learning consistency</li>
      <li>🤝 Friends & Collaboration features for shared study sessions</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Built modular, reusable UI components for scalability</li>
      <li>Efficient task and quiz data handling using PostgreSQL</li>
      <li>Clean UI focused on reducing cognitive overload</li>
    </ul>
    `,
    role: `
    Full-Stack Developer <br/>
    <ul>
      <li>🎨 Designed and implemented the complete frontend UI</li>
      <li>🗄️ Built backend APIs using Node.js and Express</li>
      <li>🧠 Designed database schema for tasks, quizzes, and analytics</li>
      <li>🚀 Handled deployment and performance optimization</li>
    </ul>
    `,
    techStack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
    ],
    thumbnail: '/projects/long/vstudy1.png',
    longThumbnail: '/projects/long/vstudy1.png',
    images: [],
  },

  {
    title: 'Askora',
    slug: 'askora',
    year: 2025,
    liveUrl: '',
    description: `
    Askora is an AI-powered Q&A assistant designed to provide contextual, accurate answers for students and professionals. It focuses on clarity, speed, and relevance. <br/><br/>

    Key Features:
    <ul>
      <li>🤖 AI-driven conversational interface</li>
      <li>📚 Context-aware responses for technical and academic queries</li>
      <li>🧠 Intelligent prompt handling for better answer quality</li>
      <li>⚡ Fast response time with optimized API calls</li>
    </ul>
    `,
    role: `
    Frontend Developer <br/>
    <ul>
      <li>🎨 Built clean, minimal chat-based UI</li>
      <li>🔗 Integrated AI APIs with error handling and loading states</li>
      <li>📱 Ensured responsive experience across devices</li>
    </ul>
    `,
    techStack: [
      'React',
      'Tailwind CSS',
      'API Integration',
      'AI Models',
    ],
    thumbnail: '/projects/long/askora1.png',
    longThumbnail: '/projects/long/askora1.png',
    images: [],
  },

  {
    title: 'FitSense',
    slug: 'fitsense',
    year: 2024,
    liveUrl: '',
    description: `
    FitSense is a health and fitness tracking application focused on monitoring user activity, habits, and overall wellness. The goal is to make fitness insights simple and actionable. <br/><br/>

    Key Features:
    <ul>
      <li>🏃 Activity and habit tracking</li>
      <li>📈 Visual insights into fitness progress</li>
      <li>🧘 Minimal, distraction-free UI</li>
      <li>📱 Mobile-first responsive design</li>
    </ul>
    `,
    role: `
    Frontend Developer <br/>
    <ul>
      <li>🎨 Designed fitness-focused UI with clarity and accessibility</li>
      <li>📊 Implemented dynamic charts and visual feedback</li>
      <li>⚡ Optimized performance for smooth interactions</li>
    </ul>
    `,
    techStack: [
      'React',
      'Tailwind CSS',
      'Chart Libraries',
    ],
    thumbnail: '/projects/long/fitsense.png',
    longThumbnail: '/projects/long/fitsense.png',
    images: [],
  },

 {
title: 'CrowdPilot AI',
slug: 'crowdpilot',
year: 2026,
liveUrl: '',
githubUrl: '',
description: `
CrowdPilot AI is a real-time crowd intelligence and optimization platform designed to improve safety and experience in large-scale environments like stadiums, events, and public spaces. <br/><br/>

Unlike traditional dashboards, the system acts as a connected decision engine — continuously monitoring conditions, predicting risks, and suggesting actionable solutions in real time. <br/><br/>

Key Features:

  <ul>
    <li>📍 Real-time crowd density and congestion monitoring</li>
    <li>🚦 AI-powered route optimization to minimize wait times</li>
    <li>⚠️ Intelligent risk detection with dynamic severity levels</li>
    <li>🤖 Proactive AI recommendations based on live system state</li>
    <li>🔄 Simulation engine to predict and test crowd scenarios</li>
    <li>🔗 Fully connected system where AI, Risk, and Simulation interact seamlessly</li>
  </ul>
  `,
  role: `
  Full Stack Developer <br/>
  <ul>
    <li>🧠 Architected a Single Source of Truth system using Context API</li>
    <li>⚡ Built a closed-loop intelligence system (Simulation → Risk → AI → Action)</li>
    <li>🎨 Designed and developed a modern, responsive dashboard UI</li>
    <li>🔄 Implemented real-time state synchronization across modules</li>
    <li>🧪 Engineered robust error handling, retry logic, and edge-case stability</li>
    <li>🚀 Optimized performance and ensured zero UI desynchronization</li>
  </ul>
  `,
  techStack: [
    'Next.js',
    'TypeScript',
    'React',
    'Context API',
    'Tailwind CSS',
    'CSS Modules',
  ],
  thumbnail: '/projects/long/crowdpilot.png',
  longThumbnail: '/projects/long/crowdpilot.png',
  images: [
    '/projects/long/crowdpilot.png'
  ],
}
,

  {
title: 'Scholar AI',
slug: 'scholar-ai',
year: 2025,
liveUrl: '',
description: `
Scholar AI is an intelligent academic assistant designed to help students quickly find, understand, and organize information efficiently. It leverages AI-driven search and structured responses to simplify learning and research workflows. <br/><br/>

The platform focuses on delivering accurate, context-aware answers while maintaining a clean and intuitive user experience. <br/><br/>

Key Features:

  <ul>
    <li>🔍 AI-powered search for academic queries</li>
    <li>🧠 Context-aware responses for better understanding</li>
    <li>📚 Structured information presentation for easy learning</li>
    <li>⚡ Fast and responsive query handling</li>
    <li>🎯 Clean UI designed for focused study sessions</li>
  </ul>
  `,
  role: `
  Frontend Developer <br/>
  <ul>
    <li>🎨 Designed and developed a clean, minimal UI for better usability</li>
    <li>🔗 Integrated AI-based response system with frontend workflows</li>
    <li>⚡ Optimized performance for fast and seamless interactions</li>
    <li>📱 Built responsive layouts for multiple devices</li>
  </ul>
  `,
  techStack: [
    'React',
    'API Integration',
    'Tailwind CSS',
  ],
  thumbnail: '/projects/long/scholarai.png',
  longThumbnail: '/projects/long/scholarai.png',
  images: [
    '/projects/long/scholarai.png'
  ],
}

];
