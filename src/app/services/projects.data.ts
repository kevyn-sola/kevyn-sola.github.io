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
    id: 'fcgm',
    label: 'Kalisport · Marque blanche · Production',
    title: 'Application FCGM Champions League',
    year: '2026',
    tagline: 'Application mobile dédiée au tournoi de Guipry-Messac : suivi des phases, résultats en temps réel, carte interactive et statistiques RGPD.',
    gradient: 'g-fcgm',
    mainTechs: ['Angular', 'Ionic', 'Capacitor', 'TypeScript'],
    allTechs: ['PHP', 'MariaDB', 'Gradle', 'XCode', 'Android Studio'],
    type: 'Application mobile hybride · Marque blanche',
    role: 'Développement & déploiement',
    intro: `Application mobile dédiée au tournoi <span class="bold">FCGM Champions League</span> de Guipry-Messac, construite et couplée à <span class="bold">Mark</span>, le logiciel de gestion de tournoi.<br/><br/>Pensée pour tous les participants sans friction : <span class="bold">aucune authentification explicite</span>, un identifiant anonyme généré au premier lancement suffit pour accéder à l'ensemble des fonctionnalités.`,
    features: [
      'Suivi des <span class="bold">phases de qualification et finales</span> – programme par jour, résultats en direct',
      '<span class="bold">Favoris et notifications</span> – suivi personnalisé de ses clubs, alertes en temps réel',
      '<span class="bold">Carte interactive du site</span> – terrains, restauration, bars, parking, partenaires, zone bénévoles',
      'Couplage avec <span class="bold">Mark (Kalisport)</span> – étude d\'impact complète avec statistiques de fréquentation et d\'usage',
      '<span class="bold">Sans authentification explicite</span> – identifiant anonyme généré au premier téléchargement, conforme RGPD',
      'Déploiement <span class="bold">App Store (iOS)</span> via Xcode et <span class="bold">Google Play (Android)</span> via Android Studio & Gradle',
    ],
    images: [
      { ratio: 'piz-1', label: 'Programme & résultats – vue principale' },
      { type: 'row', items: [
        { ratio: 'piz-sm', label: 'Carte du site' },
        { ratio: 'piz-sm', label: 'Phases & classement' },
      ]},
    ]
  },
  {
    id: 'kalisport',
    label: 'Kalisport · Production',
    title: 'Application Kalisport',
    year: '2023 – 2026',
    tagline: 'Application mobile hybride pour la gestion de clubs et tournois sportifs. +300 000 utilisateurs actifs.',
    gradient: 'g-kalisport',
    mainTechs: ['Angular', 'Ionic', 'Capacitor', 'TypeScript'],
    allTechs: ['PHP', 'MariaDB', 'RabbitMQ', 'Gradle', 'XCode', 'Android Studio'],
    type: 'Application mobile hybride',
    role: 'Lead développement & déploiement',
    intro: `Application mobile hybride pour la gestion de clubs et associations sportives, déployée sur <span class="bold">App Store et Google Play</span>.<br/><br/>Projet piloté de bout en bout : conception, architecture, déploiement, et <span class="bold">suivi post-lancement avec +300 000 utilisateurs actifs</span>.`,
    features: [
      '<span class="bold">Angular / Ionic / Capacitor</span> – architecture des composants, navigation, services REST',
      'Déploiement <span class="bold">App Store (iOS)</span> via Xcode et <span class="bold">Google Play (Android)</span> via Android Studio & Gradle',
      '<span class="bold">Messagerie temps réel</span> type WhatsApp via RabbitMQ',
      'Hub des fédérations sportives (FFBB, FFF) – modélisation base de données complète',
      'Automatismes <span class="bold">marque blanche</span> : génération de builds paramétrables',
      'Monitoring <span class="bold">Grafana / Prometheus</span>, standards OWASP (Prêt mais non utilisé)',
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
