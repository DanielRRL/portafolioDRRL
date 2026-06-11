export const portfolioData = {
  name: 'Daniel Rosales',
  role: 'Software Engineer & Full Stack Developer',
  tagline: 'Construyendo el futuro, una línea de código a la vez.',
  bio: 'Estudiante de Ingeniería de Software apasionado por crear soluciones tecnológicas elegantes y eficientes. Combino diseño minimalista con arquitecturas robustas para desarrollar productos que marcan la diferencia.',
  university: 'Universidad Tecnológica',
  semester: '6to Semestre',
  location: 'Ciudad, País',
  email: 'daniel@ejemplo.com',
  cvUrl: '/cv-daniel-rosales.pdf',

  social: {
    github: 'https://github.com/danielrosales',
    linkedin: 'https://linkedin.com/in/danielrosales',
    twitter: 'https://twitter.com/danielrosales',
  },

  heroTechnologies: ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL'],

  about: [
    'Soy un desarrollador Full Stack con experiencia construyendo aplicaciones web modernas desde el frontend hasta la infraestructura. Mi enfoque se centra en escribir código limpio, mantenible y escalable.',
    'Actualmente curso el 6to semestre de Ingeniería de Software, donde he fortalecido mis fundamentos en estructuras de datos, algoritmos, arquitectura de software y metodologías ágiles.',
    'Me apasiona el diseño de sistemas, la experiencia de usuario y la optimización de rendimiento. Creo firmemente que la tecnología bien aplicada puede transformar ideas en productos excepcionales.',
  ],

  technologies: {
    frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'CSS Modules', 'Framer Motion'],
    backend: ['Node.js', 'Express', 'Python', 'FastAPI', 'GraphQL'],
    database: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM'],
    devops: ['Docker', 'Git', 'GitHub Actions', 'Vercel', 'AWS'],
  },

  projects: [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico full-stack con carrito, pagos Stripe, dashboard admin y analytics en tiempo real.',
      image: '/projects/ecommerce.png',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/danielrosales/ecommerce',
      demo: 'https://ecommerce-demo.vercel.app',
    },
    {
      title: 'TaskFlow',
      description: 'Aplicación de gestión de tareas colaborativa con tableros Kanban, notificaciones en tiempo real y autenticación OAuth.',
      image: '/projects/taskflow.png',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      github: 'https://github.com/danielrosales/taskflow',
      demo: 'https://taskflow-demo.vercel.app',
    },
    {
      title: 'DevMetrics API',
      description: 'API REST para analytics de desarrollo: seguimiento de commits, PRs, code review y métricas de productividad del equipo.',
      image: '/projects/devmetrics.png',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis'],
      github: 'https://github.com/danielrosales/devmetrics',
      demo: 'https://devmetrics-api.onrender.com/docs',
    },
  ],

  experience: [
    {
      title: 'Full Stack Developer',
      company: 'TechStartup Inc.',
      period: 'Ene 2024 — Presente',
      description: 'Desarrollo de features end-to-end para la plataforma principal. Implementación de CI/CD, optimización de queries y migración a microservicios.',
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Digital Agency',
      period: 'Jun 2023 — Dic 2023',
      description: 'Construcción de landings y dashboards con React y TypeScript. Colaboración en design system y mejora de accesibilidad.',
    },
    {
      title: 'Teaching Assistant',
      company: 'Universidad Tecnológica',
      period: 'Ene 2023 — Jun 2023',
      description: 'Asistente en cursos de Programación y Estructuras de Datos. Mentoría a estudiantes de primeros semestres.',
    },
  ],

  navLinks: [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Tecnologías', href: '#technologies' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Contacto', href: '#contact' },
  ],
} as const
