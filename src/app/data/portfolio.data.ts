// ============================================
// PORTFOLIO DATA — single source of truth
// ============================================

export interface Stat {
  value: string;
  label: string;
}

export interface StackChip {
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  featured?: boolean;
  metrics?: string;
}

export interface SkillBar {
  name: string;
  level: number;
}

export interface SkillDomain {
  id: string;
  label: string;
  skills: SkillBar[];
}

export interface BeyondCard {
  icon: string;
  title: string;
  description: string;
}

// ─── Hero ────────────────────────────────────────────────────────────────────

export const HERO_INFO = {
  greeting: 'Bonjour, je suis',
  name: 'Kevyn Sola',
  title: 'Ingénieur Logiciel Full-Stack',
  tagline:
    '3 ans d\'expérience · Angular · Ionic · PHP · Spécialisé mobile hybride et architecture applicative',
  cvPath: 'assets/cv/Kevyn_Sola_CV2026.pdf',
  location: 'Pleslin-Trigavou, Bretagne',
  availability: 'Full Remote / Présentiel si zone géo.',
};

export const STATS: Stat[] = [
  { value: '3', label: 'ans d\'expérience' },
  { value: '+5 000', label: 'utilisateurs actifs' },
  { value: '5+', label: 'APIs intégrées' },
  { value: '15+', label: 'fonctionnalités critiques' },
];

export const STACK_CHIPS: StackChip[] = [
  { label: 'Angular' },
  { label: 'Ionic' },
  { label: 'Capacitor' },
  { label: 'TypeScript' },
  { label: 'PHP' },
  { label: 'MySQL' },
  { label: 'WebSockets' },
  { label: 'Git' },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: 'kalisport-mobile',
    title: 'Application Mobile Kalisport',
    description:
      'Application mobile Angular/Ionic/Capacitor pour la gestion d\'activités sportives. Pilotage complet : conception, développement, mise en production et relation client. Encadrement d\'un stagiaire sur l\'ensemble du projet.',
    stack: ['Angular', 'Ionic', 'Capacitor', 'TypeScript', 'PHP', 'MySQL'],
    featured: true,
    metrics: '+5 000 utilisateurs actifs',
  },
  {
    id: 'fcgm-champions',
    title: 'FCGM Champions League',
    description:
      'Application de gestion de tournois sportifs avec brackets automatisés. Refonte complète de la logique de génération des tableaux.',
    stack: ['Angular', 'PHP', 'MySQL'],
    metrics: '−40% temps de configuration',
  },
  {
    id: 'messagerie-rt',
    title: 'Messagerie Temps Réel',
    description:
      'Messagerie interne type WhatsApp via WebSockets, avec gestion des rôles et notifications push.',
    stack: ['WebSockets', 'PHP', 'MySQL', 'Angular'],
    metrics: '+1 000 msg/jour',
  },
  {
    id: 'php-framework',
    title: 'Framework PHP Maison',
    description:
      'Développement d\'un framework PHP custom avec 15+ fonctionnalités critiques : authentification, gestion des rôles, notifications, exports multi-formats (OFX, GPX, CSV).',
    stack: ['PHP', 'MySQL', 'REST APIs'],
    metrics: '15+ fonctionnalités',
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'Angular', level: 90 },
      { name: 'Ionic / Capacitor', level: 88 },
      { name: 'HTML / CSS / SCSS', level: 85 },
      { name: 'TypeScript', level: 90 },
      { name: 'React', level: 65 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'PHP', level: 85 },
      { name: 'MySQL / MariaDB', level: 82 },
      { name: 'Node.js / Express', level: 60 },
      { name: 'Symfony', level: 55 },
      { name: 'PostgreSQL', level: 55 },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Linux (Ubuntu)', level: 65 },
      { name: 'Docker', level: 55 },
      { name: 'Grafana / Prometheus', level: 50 },
    ],
  },
  {
    id: 'tools',
    label: 'Outils & Méthodes',
    skills: [
      { name: 'Agile / Scrum', level: 85 },
      { name: 'REST APIs', level: 88 },
      { name: 'Figma', level: 70 },
      { name: 'OWASP / Sécurité', level: 72 },
    ],
  },
];

// ─── Beyond ──────────────────────────────────────────────────────────────────

export const BEYOND_CARDS: BeyondCard[] = [
  {
    icon: '🏀',
    title: 'Basket',
    description:
      'Sport collectif pratiqué depuis l\'adolescence. Le jeu d\'équipe et la stratégie m\'ont appris la coordination, la communication et l\'adaptabilité sous pression.',
  },
  {
    icon: '🎙️',
    title: 'Podcasts Tech',
    description:
      'Veille technologique active. Toujours à l\'affût des nouvelles tendances du développement logiciel, d\'architecture et de culture tech.',
  },
  {
    icon: '🎵',
    title: 'Musique & Cinéma',
    description:
      'Ancien ingénieur du son. La sensibilité artistique nourrit ma créativité et mon attention au détail dans le design et l\'expérience utilisateur.',
  },
];

// ─── Contact ─────────────────────────────────────────────────────────────────

export const CONTACT_INFO = {
  email: 'kevyn.sola@gmail.com',
  github: 'https://github.com/kevyn-sola',
  linkedin: 'https://linkedin.com/in/kevyn-sola',
  phone: '06.19.67.10.40',
};
