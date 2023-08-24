import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nextjs,
  postgres,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  epsilonlogo,
  TCS,
  movieapp,
  spacex,
  fitness,
} from '../assets'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Js Developer",
    icon: web,
  },
  {
    title: "Javascript Developer",
    icon: mobile,
  },
  {
    title: "Email Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Next Js',
    icon: nextjs,
  },
  {
    name: 'PostgreSQL',
    icon: postgres,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
]

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Epsilon',
    icon: epsilonlogo,
    iconBg: '#383E56',
    date: 'Sep 2021 - Current',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'UI Developer',
    company_name: 'Tata Consultancy Services',
    icon: TCS,
    iconBg: '#E6DEDD',
    date: 'Jun 2018 - Sep 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },

]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "TCS",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

const projects = [
  {
    name: 'Movie booking App',
    description:
      'Web-based platform that allows users to search, book movies ans select seats.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Animations',
        color: 'pink-text-gradient',
      },
    ],
    image: movieapp,
    source_code_link: 'https://movie-booking-app-js.netlify.app/',
  },
  {
    name: 'Fitenss App',
    description:
      'Web application that enables users to search for different GYM plans and different workouts.',
    tags: [
      {
        name: 'CSS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'ReactJS',
        color: 'pink-text-gradient',
      },
    ],
    image: fitness,
    source_code_link: 'https://bestfit.netlify.app/',
  },
  {
    name: 'Space-X clone',
    description: 'Space-X clone - mocked the existing website.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'reactjs',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: spacex,
    source_code_link: 'https://clone-spacex.netlify.app/',
  },
]

export { services, technologies, experiences, testimonials, projects };
