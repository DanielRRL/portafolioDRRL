import type { TranslationKey, Lang } from '../i18n/types'
import { es } from '../i18n/es'
import { en } from '../i18n/en'

const maps: Record<Lang, Record<TranslationKey, string>> = { es, en }

const techCatKeys: Record<string, TranslationKey> = {
  frontend: 'tech.cat.frontend',
  backend: 'tech.cat.backend',
  database: 'tech.cat.database',
  devops: 'tech.cat.devops',
  auth: 'tech.cat.auth',
  ai: 'tech.cat.ai',
}

const sharedData = {
  heroTechnologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'] as const,
  technologies: {
    frontend: ['React 19', 'Vite 7', 'TypeScript 5.8', 'TailwindCSS v4', 'Zustand', 'TanStack React Query', 'Radix UI', 'Recharts', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Express 5', 'Java', 'Spring Boot', 'Python', 'FastAPI', 'Go', 'Gin', 'Prisma 7', 'Mongoose 8'],
    database: ['PostgreSQL 16', 'MySQL', 'MongoDB', 'Prisma ORM', 'pgAdmin 4'],
    devops: ['Railway', 'Docker', 'Docker Compose', 'Nixpacks', 'CI/CD', 'Git', 'GitHub'],
    auth: ['JWT', 'bcryptjs', 'Google OAuth 2.0', 'CORS', 'Helmet', 'Rate-limiting', 'Honeypot'],
    ai: ['Agentes IA', 'ML supervisado', 'Automatización LLMs', 'Brevo SMTP', 'Nodemailer'],
  },
  social: {
    github: 'https://github.com/DanielRRL',
    linkedin: 'https://www.linkedin.com/in/daniel-ramon-386b01278',
    instagram: 'https://www.instagram.com/danielramon379?igsh=NWJqMnhweDI2MG4w',
  },
  email: 'danielramon379@gmail.com',
  emailSecondary: 'reinaramon289@gmail.com',
  cvUrl: '/CV_Daniel_Reina_Lopez_2026.pdf',
  location: 'Armenia, Quindío, Colombia',
  projectImages: {
    variedadesDanii: '/variedadesDanii.webp',
    simetrica: '/SIMETRICA.webp',
    lopes: '/lopesyescobarabogados.webp',
    portfolio: '/portafolio.webp',
  },
  projectTechnologies: {
    variedadesDanii: ['React 19', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'Railway'],
    simetrica: ['React 19', 'Express 5', 'MongoDB', 'Mongoose 8', 'Railway'],
    lopes: ['React', 'Node.js', 'Spring Boot', 'MySQL', 'PostgreSQL'],
    portfolio: ['React 19', 'TypeScript', 'Vite', 'CSS Modules', 'Framer Motion', 'OpenCode IA'],
  },
  projectLinks: {
    variedadesDanii: { github: 'https://github.com/DanielRRL/variedadesDanii', demo: 'https://www.variedadesdanii.com/' },
    simetrica: { github: 'https://github.com/Jruiz3019/SIM-TRICA', demo: 'https://www.xn--simtrica-d1a.com/' },
    lopes: { github: 'https://github.com/lopezyescobarabogados/loyestask', demo: 'https://lopezyescobarabogados.com' },
    portfolio: { github: 'https://github.com/DanielRRL/portafolioDRRL', demo: '' },
  },
  navHrefs: ['#hero', '#about', '#technologies', '#projects', '#experience', '#contact'] as const,
}

const textData = {
  es: {
    name: 'Daniel Ramón Reina López',
    role: 'Full-Stack Software Developer',
    tagline: 'Diseño e implementación de sistemas web escalables — Clean Architecture, microservicios e integración de IA.',
    shortBio: 'Desarrollador Full-Stack con experiencia en diseño e implementación de sistemas web escalables para e-commerce, CRM y ERP. Especializado en arquitecturas RESTful, Clean/Hexagonal Architecture y microservicios con Node.js, Express, TypeScript, React, Java y Go.',
    university: 'Institución Universitaria EAM',
    semester: '8.° semestre en curso',
    about: [
      'Desarrollador Full-Stack con experiencia en diseño e implementación de sistemas web escalables para e-commerce, CRM y ERP. Especializado en arquitecturas RESTful, Clean/Hexagonal Architecture y microservicios con Node.js, Express, TypeScript, React, Java y Go.',
      'Experiencia en despliegue cloud (Railway, Docker), integración de pasarelas de pago colombianas, autenticación OAuth 2.0, y aplicación de inteligencia artificial en automatización de procesos de negocio.',
      'Actualmente curso 8.° semestre de Ingeniería de Software en la Institución Universitaria EAM. Habituado a entregar productos funcionales con buenas prácticas de código, testing y CI/CD.',
    ],
    navLabels: ['Inicio', 'Sobre mí', 'Tecnologías', 'Proyectos', 'Experiencia', 'Contacto'],
    projects: [
      {
        title: 'Variedades Danii',
        description: 'E-commerce completo de perfumería artesanal con soporte de ventas online y punto de venta (POS) presencial. Pagos colombianos, facturación electrónica DIAN y auth Google OAuth 2.0.',
      },
      {
        title: 'SIMÉTRICA',
        description: 'Sitio web corporativo y CRM interno para empresa de construcción, arquitectura y diseño. Panel admin, vitrina de proyectos, bolsa de trabajo y registro de proveedores.',
      },
      {
        title: 'López & Escobar',
        description: 'ERP jurídico para automatización de procesos legales internos del despacho. Módulos de gestión documental, seguimiento de casos, agenda y APIs REST con Node.js y Spring Boot.',
      },
      {
        title: 'PortafolioDRRL',
        description: 'Portafolio web personal construido con React 19, TypeScript, Vite y CSS Modules. Diseño responsive con tema oscuro, animaciones con Framer Motion y arquitectura modular por secciones. Creado con asistencia de IA (OpenCode + DeepSeek V4 Pro) como demostración de integración de LLMs en el flujo de desarrollo.',
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
  },
  en: {
    name: 'Daniel Ramón Reina López',
    role: 'Full-Stack Software Developer',
    tagline: 'Design and implementation of scalable web systems — Clean Architecture, microservices, and AI integration.',
    shortBio: 'Full-Stack Developer with experience designing and implementing scalable web systems for e-commerce, CRM, and ERP. Specialized in RESTful architectures, Clean/Hexagonal Architecture, and microservices with Node.js, Express, TypeScript, React, Java, and Go.',
    university: 'Institución Universitaria EAM',
    semester: '8th semester in progress',
    about: [
      'Full-Stack Developer with experience designing and implementing scalable web systems for e-commerce, CRM, and ERP. Specialized in RESTful architectures, Clean/Hexagonal Architecture, and microservices with Node.js, Express, TypeScript, React, Java, and Go.',
      'Experience in cloud deployment (Railway, Docker), integration of Colombian payment gateways, OAuth 2.0 authentication, and application of artificial intelligence in business process automation.',
      'Currently in my 8th semester of Software Engineering at Institución Universitaria EAM. Committed to delivering functional products with best coding practices, testing, and CI/CD.',
    ],
    navLabels: ['Home', 'About', 'Technologies', 'Projects', 'Experience', 'Contact'],
    projects: [
      {
        title: 'Variedades Danii',
        description: 'Complete artisan perfumery e-commerce with online sales and point-of-sale (POS) support. Colombian payments, DIAN electronic invoicing, and Google OAuth 2.0 authentication.',
      },
      {
        title: 'SIMÉTRICA',
        description: 'Corporate website and internal CRM for a construction, architecture, and design company. Admin panel, project showcase, job board, and supplier registration.',
      },
      {
        title: 'López & Escobar',
        description: 'Legal ERP for automating internal legal processes. Document management modules, case tracking, scheduling, and REST APIs with Node.js and Spring Boot.',
      },
      {
        title: 'PortafolioDRRL',
        description: 'Personal web portfolio built with React 19, TypeScript, Vite, and CSS Modules. Responsive design with dark theme, Framer Motion animations, and modular section architecture. Built with AI assistance (OpenCode + DeepSeek V4 Pro) as a demonstration of LLM integration in development workflows.',
      },
    ],
    experience: [
      {
        title: 'Full-Stack Developer',
        company: 'Variedades Danii — Freelance',
        period: '2025 — 2026',
        description: 'Complete e-commerce with React 19, Node.js, Express 5, TypeScript, Prisma 7, PostgreSQL 16 in Clean/Hexagonal Architecture. Colombian payment integration, OAuth 2.0 authentication, DIAN electronic invoicing, and Railway deployment with Docker Compose.',
      },
      {
        title: 'Full-Stack Developer',
        company: 'SIMÉTRICA — Freelance',
        period: '2024 — 2025 · 3 months',
        description: 'Corporate website and CRM with React 19, Express 5, MongoDB, Mongoose 8. Monorepo architecture, admin panel with 9 sections, JWT + bcryptjs, USER/ADMIN roles, dark theme, and responsive mobile-first design.',
      },
      {
        title: 'Software Developer',
        company: 'López & Escobar Abogados — Freelance',
        period: '2024 · 4 months',
        description: 'Legal ERP with RESTful APIs in Node.js and Spring Boot. Document management modules, case tracking, scheduling, and relational data model in MySQL/PostgreSQL.',
      },
    ],
  },
}

export type PortfolioData = ReturnType<typeof getPortfolioData>

export function getPortfolioData(lang: Lang) {
  const t = textData[lang]
  const projectImages = sharedData.projectImages
  const projectTechs = sharedData.projectTechnologies
  const projectLinks = sharedData.projectLinks

  return {
    ...sharedData,
    ...t,
    projects: t.projects.map((p, i) => ({
      ...p,
      image: Object.values(projectImages)[i],
      technologies: Object.values(projectTechs)[i],
      github: Object.values(projectLinks)[i].github,
      demo: Object.values(projectLinks)[i].demo,
    })),
    experience: t.experience,
    navLinks: t.navLabels.map((label, i) => ({
      label,
      href: sharedData.navHrefs[i],
    })),
  }
}

export function t(key: TranslationKey, lang: Lang): string {
  return maps[lang][key]
}

export function techCategoryLabel(category: string, lang: Lang): string {
  return maps[lang][techCatKeys[category] ?? 'tech.cat.frontend']
}
