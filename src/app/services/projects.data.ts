import { Project } from './projects.service';

export const PROJECTS: Project[] = [
  {
    id: 'kanban',
    label: 'Projet personnel · Java Spring Boot',
    title: 'Kanban & Roadmap client',
    year: '2026',
    tagline: 'Application Kanban avec génération automatique de roadmaps client, partageables via URL publique ou protégée par mot de passe.',
    gradient: 'g-kanban',
    mainTechs: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA'],
    allTechs: ['Angular', 'PostgreSQL', 'Docker'],
    featured: true,
    type: 'Application web fullstack',
    role: 'Conception & développement',
    intro: `Application Kanban permettant de gérer ses propres boards, d'y organiser des tâches et de <span class="bold">générer automatiquement des roadmaps client</span> partageables via URL publique ou protégée par mot de passe.<br/><br/>Conçu principalement pour pratiquer l'écosystème Spring Boot de bout en bout – de la sécurisation des endpoints à la gestion de la persistance.`,
    features: [
      '<span class="bold">Backend Java Spring Boot</span> – API REST (Spring Web), architecture Controller / Service / Repository',
      '<span class="bold">Authentification Spring Security</span> + tokens JWT, gestion des accès (public / protégé)',
      '<span class="bold">Persistance Spring Data JPA / Hibernate</span>, validation Spring Validation',
      'Build <span class="bold">Maven</span>, base de données PostgreSQL',
      'Frontend <span class="bold">Angular</span> : gestion des boards, drag-and-drop des tâches, vue roadmap dédiée',
      'Conteneurisation <span class="bold">Docker Compose</span> : API + frontend + base de données',
    ],
    images: [
      { ratio: 'piz-1', label: 'Vue principale – Boards & tâches' },
      { ratio: 'piz-2', label: 'Vue Roadmap client partageable' },
      { type: 'row', items: [
        { ratio: 'piz-sm', label: 'Login / Auth' },
        { ratio: 'piz-sm', label: 'Board detail' },
      ]},
    ]
  },
  {
    id: 'mariage',
    label: 'Projet personnel · Fullstack',
    title: 'Gestion de mariage DIY',
    year: '2026',
    tagline: 'Solution fullstack – backend NestJS, frontend Angular, site vitrine NextJS invités, roadmap mobile Ionic.',
    gradient: 'g-mariage',
    mainTechs: ['NestJS', 'Angular', 'NextJS'],
    allTechs: ['PostgreSQL', 'Prisma ORM', 'Docker'],
    type: 'Application fullstack multi-surfaces',
    role: 'Conception & développement',
    intro: `Solution complète pour organiser un mariage – pensée comme un <span class="bold">vrai produit</span> avec trois surfaces distinctes : une interface de gestion pour les mariés, un site vitrine pour les invités, et une roadmap d'application mobile.<br/><br/>Le backend NestJS adopte une architecture modulaire avec injection de dépendances et décorateurs – un <span class="bold">paradigme très proche de Spring Boot</span>.`,
    features: [
      '<span class="bold">Backend NestJS</span> – architecture modulaire, injection de dépendances, décorateurs',
      '<span class="bold">Frontend Angular</span> : interface de gestion pour les mariés (composants standalone, routing)',
      '<span class="bold">Site vitrine NextJS</span> pour les invités : programme, infos pratiques, RSVP',
      '<span class="bold">PostgreSQL + Prisma ORM</span> – migrations, relations, transactions',
      'Conteneurisation <span class="bold">Docker Compose</span> : API + frontend + base de données',
      'Roadmap : app mobile <span class="bold">Ionic / Capacitor / Angular</span> connectée aux endpoints NestJS',
    ],
    images: [
      { ratio: 'piz-1', label: 'Dashboard mariés – vue principale' },
      { ratio: 'piz-2', label: 'Site vitrine invités (NextJS)' },
      { type: 'row', items: [
        { ratio: 'piz-sm', label: 'Planning' },
        { ratio: 'piz-sm', label: 'RSVP invités' },
      ]},
    ]
  },
  {
    id: 'kalisport',
    label: 'Kalisport · Production',
    title: 'Application Kalisport',
    year: '2023 – 2026',
    tagline: 'Application mobile hybride pour la gestion de clubs et tournois sportifs. +5 000 utilisateurs actifs.',
    gradient: 'g-kalisport',
    mainTechs: ['Angular', 'Ionic', 'Capacitor', 'TypeScript'],
    allTechs: ['PHP', 'MariaDB', 'WebSockets', 'Gradle'],
    type: 'Application mobile hybride',
    role: 'Lead développement & déploiement',
    intro: `Application mobile hybride pour la gestion de clubs et tournois sportifs, déployée sur <span class="bold">App Store et Google Play</span> et utilisée par les grandes fédérations sportives françaises (FFBB, FFF).<br/><br/>Projet piloté de bout en bout : conception, architecture, déploiement, et <span class="bold">suivi post-lancement avec +5 000 utilisateurs actifs</span>.`,
    features: [
      '<span class="bold">Angular / Ionic / Capacitor</span> – architecture des composants, navigation, services REST',
      'Déploiement <span class="bold">App Store (iOS)</span> via Xcode et <span class="bold">Google Play (Android)</span> via Gradle',
      '<span class="bold">Messagerie temps réel</span> type WhatsApp via WebSockets : +1 000 messages/jour',
      'Hub des fédérations sportives (FFBB, FFF) – modélisation base de données complète',
      'Application <span class="bold">FCGM Champions League</span> de Guipry-Messac (2026)',
      'Automatismes <span class="bold">marque blanche</span> : génération de builds paramétrables',
      'Monitoring <span class="bold">Grafana / Prometheus</span>, standards OWASP',
    ],
    images: [
      { ratio: 'piz-1', label: 'Vue principale de l\'application' },
      { type: 'row', items: [
        { ratio: 'piz-sm', label: 'Écran tournoi' },
        { ratio: 'piz-sm', label: 'Messagerie' },
        { ratio: 'piz-sm', label: 'Fédérations' },
      ]},
      { ratio: 'piz-2', label: 'Dashboard fédération (FFBB / FFF)' },
    ]
  },
];
