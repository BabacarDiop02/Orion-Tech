export const NAV_LINKS = [
  { label: "Solutions", href: "#services" },
  { label: "Expertise", href: "#engine-room" },
  { label: "Missions", href: "#missions" },
  { label: "About", href: "#origin" },
  { label: "Contact", href: "#contact" },
];

export const SYSTEM_MODULES = [
  {
    id: "web",
    label: "WEB",
    title: "Web",
    description: "Sites et plateformes web construits pour durer et convertir.",
  },
  {
    id: "mobile",
    label: "MOBILE",
    title: "Mobile",
    description: "Applications iOS et Android pensées pour l'usage réel.",
  },
  {
    id: "software",
    label: "SOFTWARE",
    title: "Software",
    description: "Logiciels métiers sur mesure, taillés pour vos processus.",
  },
  {
    id: "ai",
    label: "AI",
    title: "AI",
    description: "Intelligence artificielle intégrée à vos produits, pas ajoutée en surface.",
  },
  {
    id: "data",
    label: "DATA",
    title: "Data",
    description: "Des données structurées, fiables, exploitables.",
  },
  {
    id: "automation",
    label: "AUTOMATION",
    title: "Automation",
    description: "Des processus manuels transformés en systèmes automatisés.",
  },
  {
    id: "cloud",
    label: "CLOUD",
    title: "Cloud",
    description: "Une infrastructure qui tient la charge, du premier jour à l'échelle.",
  },
] as const;

export const SERVICES = [
  {
    number: "01",
    title: "Digital Products",
    description: "Applications web et mobiles conçues de bout en bout, de l'idée au déploiement.",
    tech: ["React", "Next.js", "Flutter"],
  },
  {
    number: "02",
    title: "Software Engineering",
    description: "Logiciels métiers sur mesure, pensés pour vos processus réels.",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
  },
  {
    number: "03",
    title: "Digital Platforms",
    description: "Plateformes complexes et écosystèmes numériques connectés.",
    tech: ["Node.js", "APIs", "Cloud"],
  },
  {
    number: "04",
    title: "UI / UX",
    description: "Expériences digitales pensées pour l'utilisateur, pas pour la démo.",
    tech: ["Figma", "Design Systems"],
  },
  {
    number: "05",
    title: "AI & Automation",
    description: "Automatisation des opérations et intégration de systèmes intelligents.",
    tech: ["AI", "APIs", "Automation"],
  },
  {
    number: "06",
    title: "E-commerce",
    description: "Solutions de commerce digital adaptées aux usages et marchés locaux.",
    tech: ["React", "Payments", "APIs"],
  },
  {
    number: "07",
    title: "Cloud & Infrastructure",
    description: "Architecture, déploiement et infrastructure taillés pour la charge réelle.",
    tech: ["Docker", "Git", "GitLab"],
  },
] as const;

export const MISSIONS = [
  {
    id: "xalisgo",
    name: "XalisGo",
    category: "Fintech / Digital Platform",
    challenge: "Simplifier les transactions financières du quotidien pour un usage massif et mobile-first.",
    strategy: "Repenser le parcours de paiement autour de la rapidité et de la confiance.",
    design: "Une interface épurée, lisible en une main, pensée pour la répétition.",
    engineering: "Architecture orientée API, synchronisation temps réel, sécurité des transactions.",
    result: "Une plateforme stable, prête à absorber la montée en charge.",
    tech: ["React", "Spring Boot", "PostgreSQL"],
  },
  {
    id: "pharma-connect",
    name: "Pharma Connect",
    category: "HealthTech / Mobile",
    challenge: "Connecter patients et pharmacies en temps réel, sans friction.",
    strategy: "Prioriser la disponibilité de l'information et la simplicité de recherche.",
    design: "Une app mobile claire, accessible, pensée pour tous les âges.",
    engineering: "Synchronisation des stocks, géolocalisation, notifications.",
    result: "Un pont digital fiable entre patients et officines.",
    tech: ["Flutter", "Java", "MySQL"],
  },
  {
    id: "fintrack",
    name: "FinTrack",
    category: "FinTech / Mobile",
    challenge: "Donner aux indépendants et PME une vision claire de leurs finances.",
    strategy: "Transformer des données financières complexes en décisions simples.",
    design: "Des tableaux de bord lisibles, des chiffres qui parlent d'eux-mêmes.",
    engineering: "Agrégation de données, calculs en temps réel, exports.",
    result: "Un système de suivi financier intelligent et évolutif.",
    tech: ["Flutter", "Spring Boot", "Docker"],
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "Nous identifions le problème réel derrière votre besoin.",
  },
  {
    number: "02",
    title: "Define",
    description: "Nous cadrons la portée, les priorités et les contraintes.",
  },
  {
    number: "03",
    title: "Design",
    description: "Nous transformons les besoins en expérience concrète.",
  },
  {
    number: "04",
    title: "Engineer",
    description: "Nous construisons une base technique solide et évolutive.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Nous livrons un produit fonctionnel, testé, prêt à l'usage.",
  },
  {
    number: "06",
    title: "Evolve",
    description: "Nous faisons évoluer la solution avec vos besoins réels.",
  },
] as const;

export const TECH_STACK = {
  Frontend: ["React", "Next.js", "Angular"],
  Backend: ["Java", "Spring Boot", "Node.js"],
  Mobile: ["Flutter"],
  Database: ["PostgreSQL", "MySQL"],
  Infrastructure: ["Docker", "Git", "GitLab"],
  Systems: ["REST APIs", "AI"],
} as const;

export const CONTACT_INFO = {
  city: "Dakar, Sénégal",
  coordinates: "14.6928° N, 17.4467° W",
  email: "contact@oriontech.sn",
  phone: "+221 XX XXX XX XX",
};

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "GitHub", href: "#" },
];

export const PROJECT_TYPES = [
  "Site web",
  "Application mobile",
  "Logiciel sur mesure",
  "Plateforme digitale",
  "E-commerce",
  "Autre",
];

export const BUDGET_RANGES = [
  "Moins de 2 000 000 FCFA",
  "2 000 000 – 5 000 000 FCFA",
  "5 000 000 – 15 000 000 FCFA",
  "Plus de 15 000 000 FCFA",
  "À discuter",
];
