import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'bhavithshetty2203@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Bhavith, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
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
    thumbnail: '/projects/thumbnail/Vstudy.jpeg',
    longThumbnail: '/projects/long/vstudy.jpg',
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
    thumbnail: '/projects/thumbnail/askora.jpg',
    longThumbnail: '/projects/long/askora.jpg',
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
    thumbnail: '/projects/thumbnail/fitsense.jpg',
    longThumbnail: '/projects/long/fitsense.jpg',
    images: [],
  },

  {
    title: 'Moodora',
    slug: 'moodora',
    year: 2024,
    liveUrl: '',
    description: `
    Moodora is a mood-tracking and mental wellness application that helps users reflect on emotions and identify patterns over time. <br/><br/>

    Key Features:
    <ul>
      <li>😊 Daily mood logging with visual indicators</li>
      <li>📊 Emotional trend analysis</li>
      <li>🧠 Calm, empathetic UI design</li>
      <li>🔒 Privacy-focused data handling</li>
    </ul>
    `,
    role: `
    Frontend Developer <br/>
    <ul>
      <li>🎨 Designed a soothing, user-friendly interface</li>
      <li>📈 Implemented mood visualization and history tracking</li>
      <li>🧩 Ensured accessibility and smooth UX</li>
    </ul>
    `,
    techStack: [
      'React',
      'Tailwind CSS',
      'State Management',
    ],
    thumbnail: '/projects/thumbnail/moodora.jpg',
    longThumbnail: '/projects/long/moodora.jpg',
    images: [],
  },

  {
    title: 'Movie Recommendation System',
    slug: 'movie-recommendation',
    year: 2023,
    liveUrl: '',
    description: `
    A movie recommendation platform that helps users discover films based on popularity and preferences using real-time API data. <br/><br/>

    Key Features:
    <ul>
      <li>🎬 Browse trending and popular movies</li>
      <li>❤️ Add movies to favorites</li>
      <li>🔍 Search functionality with live results</li>
      <li>⚡ Real-time data fetching from external APIs</li>
    </ul>
    `,
    role: `
    Frontend Developer <br/>
    <ul>
      <li>🎨 Built UI using React with reusable components</li>
      <li>🔗 Integrated third-party movie APIs</li>
      <li>📱 Ensured responsive and smooth user experience</li>
    </ul>
    `,
    techStack: [
      'React',
      'API Integration',
      'CSS',
    ],
    thumbnail: '/projects/thumbnail/movie-rec.jpg',
    longThumbnail: '/projects/long/movie-rec.jpg',
    images: [],
  },
];


export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer (Frontend)',
        company: 'Strativ AB',
        duration: 'Dec 2024 - Present',
    },
    {
        title: 'Frontend Developer',
        company: 'Epikcoders',
        duration: 'Oct 2023 - Nov 2024',
    },
    {
        title: 'Frontend Engineer',
        company: 'Anchorblock Technology',
        duration: 'Oct 2022 - Sep 2023',
    },
    {
        title: 'Frontend Developer (Part-time)',
        company: 'Branex IT',
        duration: 'Jan 2022 - Oct 2022',
    },
];
