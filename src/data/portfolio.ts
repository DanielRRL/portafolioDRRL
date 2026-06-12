export const portfolioData = {
  name: 'Daniel Ramón Reina López',
  role: 'Full-Stack Software Developer',
  tagline: 'Diseño e implementación de sistemas web escalables — Clean Architecture, microservicios e integración de IA.',
  bio: 'Desarrollador Full-Stack con experiencia en diseño e implementación de sistemas web escalables para e-commerce, CRM y ERP. Especializado en arquitecturas RESTful, Clean/Hexagonal Architecture y microservicios con Node.js, Express, TypeScript, React, Java y Go.',
  university: 'Institución Universitaria EAM',
  semester: '8.° semestre en curso',
  location: 'Armenia, Quindío, Colombia',
  email: 'danielramon379@gmail.com',
  emailSecondary: 'reinaramon289@gmail.com',
  cvUrl: '/CV_Daniel_Reina_Lopez_2026.pdf',

  social: {
    github: 'https://github.com/DanielRRL',
    linkedin: 'https://www.linkedin.com/in/daniel-ramon-386b01278',
    instagram: 'https://www.instagram.com/danielramon379?igsh=NWJqMnhweDI2MG4w',
  },

  heroTechnologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],

  about: [
    'Desarrollador Full-Stack con experiencia en diseño e implementación de sistemas web escalables para e-commerce, CRM y ERP. Especializado en arquitecturas RESTful, Clean/Hexagonal Architecture y microservicios con Node.js, Express, TypeScript, React, Java y Go.',
    'Experiencia en despliegue cloud (Railway, Docker), integración de pasarelas de pago colombianas, autenticación OAuth 2.0, y aplicación de inteligencia artificial en automatización de procesos de negocio.',
    'Actualmente curso 8.° semestre de Ingeniería de Software en la Institución Universitaria EAM. Habituado a entregar productos funcionales con buenas prácticas de código, testing y CI/CD.',
  ],

  technologies: {
    frontend: ['React 19', 'Vite 7', 'TypeScript 5.8', 'TailwindCSS v4', 'Zustand', 'TanStack React Query', 'Radix UI', 'Recharts', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Express 5', 'Java', 'Spring Boot', 'Python', 'FastAPI', 'Go', 'Gin', 'Prisma 7', 'Mongoose 8'],
    database: ['PostgreSQL 16', 'MySQL', 'MongoDB', 'Prisma ORM', 'pgAdmin 4'],
    devops: ['Railway', 'Docker', 'Docker Compose', 'Nixpacks', 'CI/CD', 'Git', 'GitHub'],
    auth: ['JWT', 'bcryptjs', 'Google OAuth 2.0', 'CORS', 'Helmet', 'Rate-limiting', 'Honeypot'],
    ai: ['Agentes IA', 'ML supervisado', 'Automatización LLMs', 'Brevo SMTP', 'Nodemailer'],
  },

  projects: [
    {
      title: 'Variedades Danii',
      description: 'E-commerce completo de perfumería artesanal con soporte de ventas online y punto de venta (POS) presencial. Pagos colombianos, facturación electrónica DIAN y auth Google OAuth 2.0.',
      image: '/variedadesDanii.webp',
      technologies: ['React 19', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'Railway'],
      github: 'https://github.com/DanielRRL/variedadesDanii',
      demo: 'https://www.variedadesdanii.com/',
    },
    {
      title: 'SIMÉTRICA',
      description: 'Sitio web corporativo y CRM interno para empresa de construcción, arquitectura y diseño. Panel admin, vitrina de proyectos, bolsa de trabajo y registro de proveedores.',
      image: '/SIMETRICA.webp',
      technologies: ['React 19', 'Express 5', 'MongoDB', 'Mongoose 8', 'Railway'],
      github: 'https://github.com/Jruiz3019/SIM-TRICA',
      demo: 'https://www.xn--simtrica-d1a.com/',
    },
    {
      title: 'López & Escobar',
      description: 'ERP jurídico para automatización de procesos legales internos del despacho. Módulos de gestión documental, seguimiento de casos, agenda y APIs REST con Node.js y Spring Boot.',
      image: '/lopesyescobarabogados.webp',
      technologies: ['React', 'Node.js', 'Spring Boot', 'MySQL', 'PostgreSQL'],
      github: 'https://github.com/lopezyescobarabogados/loyestask',
      demo: 'https://lopezyescobarabogados.com',
    },
    {
      title: 'PortafolioDRRL',
      description: 'Portafolio web personal construido con React 19, TypeScript, Vite y CSS Modules. Diseño responsive con tema oscuro, animaciones con Framer Motion y arquitectura modular por secciones. Creado con asistencia de IA (OpenCode + DeepSeek V4 Pro) como demostración de integración de LLMs en el flujo de desarrollo.',
      image: '/portafolio.webp',
      technologies: ['React 19', 'TypeScript', 'Vite', 'CSS Modules', 'Framer Motion', 'OpenCode IA'],
      github: 'https://github.com/DanielRRL/portafolioDRRL',
      demo: '',
    },
  ],

  experience: [
    {
      title: 'Desarrollador Full-Stack',
      company: 'Variedades Danii — Freelance',
      period: '2025 — 2026',
      description: 'E-commerce completo con React 19, Node.js, Express 5, TypeScript, Prisma 7, PostgreSQL 16 en Clean/Hexagonal Architecture. Integración de pagos colombianos, autenticación OAuth 2.0, facturación electrónica DIAN y despliegue en Railway con Docker Compose.',
    },
    {
      title: 'Desarrollador Full-Stack',
      company: 'SIMÉTRICA — Freelance',
      period: '2024 — 2025 · 3 meses',
      description: 'Sitio corporativo y CRM con React 19, Express 5, MongoDB, Mongoose 8. Arquitectura monorepo, panel admin con 9 secciones, JWT + bcryptjs, roles USER/ADMIN, tema oscuro y diseño responsive mobile-first.',
    },
    {
      title: 'Desarrollador de Software',
      company: 'López & Escobar Abogados — Freelance',
      period: '2024 · 4 meses',
      description: 'ERP jurídico con APIs RESTful en Node.js y Spring Boot. Módulos de gestión documental, seguimiento de casos, agenda y modelo de datos relacionales en MySQL/PostgreSQL.',
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
