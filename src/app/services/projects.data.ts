import { Project } from './projects.service';

export const PROJECTS: Project[] = [
  {
    id: 'kanban',
    label: 'Projet personnel · Java Spring Boot',
    title: 'Kanban & Roadmap client',
    year: '2026',
    tagline: 'Application Kanban avec génération automatique de roadmaps client, partageables via URL publique ou protégée par mot de passe.',
    mainTechs: ['Java', 'Spring Boot', 'Angular', 'TypeScript'],
    allTechs: ['Spring Security', 'Spring Data JPA', 'PostgreSQL', 'Docker'],
    role: 'Conception & développement',
    caseStudy: {
      context: `Projet personnel pour pratiquer l'écosystème Spring Boot de bout en bout : sécurisation des endpoints, persistance, conteneurisation.`,
      // TODO : pour chaque décision, ajouter le « pourquoi » (alternative écartée, contrainte).
      decisions: [
        `Roadmaps client générées depuis les boards, partageables via URL publique ou protégée par mot de passe`,
        `API REST Spring Boot (Spring Web), architecture Controller / Service / Repository, build Maven`,
        `Authentification Spring Security + JWT, avec des niveaux d'accès public / protégé`,
        `Persistance Spring Data JPA / Hibernate et validation Spring Validation, base PostgreSQL`,
        `Frontend Angular : gestion des boards, drag-and-drop des tâches, vue roadmap dédiée`,
        `Conteneurisation Docker Compose : API, frontend et base de données`,
      ],
      // TODO : état du projet (en ligne ? utilisé ?) et ce que tu en as appris.
      results: [],
    },
  },
  {
    id: 'mariage',
    label: 'Projet personnel · Fullstack',
    title: 'Gestion de mariage DIY',
    year: '2026',
    tagline: 'Solution fullstack – backend NestJS, frontend Angular, site vitrine NextJS invités, roadmap mobile Ionic.',
    mainTechs: ['Angular', 'TypeScript', 'NestJS', 'NextJS'],
    allTechs: ['PostgreSQL', 'Prisma ORM', 'Docker'],
    role: 'Conception & développement',
    caseStudy: {
      context: `Organiser un mariage, pensé comme un produit à part entière, avec des besoins différents pour les mariés et pour les invités.`,
      // TODO : pourquoi trois surfaces séparées ? pourquoi NestJS plutôt que Spring Boot ici ?
      decisions: [
        `Trois surfaces distinctes : gestion pour les mariés (Angular, composants standalone), site invités en NextJS (programme, infos pratiques, RSVP), application mobile en roadmap (Ionic / Capacitor, connectée aux endpoints NestJS)`,
        `Backend NestJS modulaire avec injection de dépendances et décorateurs, un paradigme proche de Spring Boot`,
        `PostgreSQL + Prisma ORM (migrations, relations, transactions), le tout conteneurisé avec Docker Compose`,
      ],
      // TODO : utilisé pour ton mariage ? nombre d'invités, RSVP reçus, retours…
      results: [],
    },
  },
  {
    id: 'fcgm',
    label: 'Kalisport · Production',
    title: 'Application FCGM Champions League',
    year: '2026',
    tagline: 'Application mobile dédiée au tournoi de Guipry-Messac : suivi des phases, résultats en temps réel, carte interactive et statistiques RGPD.',
    mainTechs: ['Angular', 'TypeScript', 'PHP', 'Ionic', 'Capacitor'],
    allTechs: ['MariaDB', 'Gradle', 'XCode', 'Android Studio'],
    role: 'Développement, déploiement et relation client',
    visual: 'assets/projects/fcgm/cover.webp',
    caseStudy: {
      context: `Le tournoi FCGM Champions League de Guipry-Messac avait besoin d'une application pour suivre les phases, les résultats et se repérer sur le site, utilisable par tous les participants sans friction.`,
      // TODO : qui a pris ces décisions (toi, l'équipe, le client) ? avec quelles contraintes (délai, budget) ?
      decisions: [
        `Aucune authentification explicite : un identifiant anonyme généré au premier lancement, conforme RGPD`,
        `Recréée de zéro plutôt que dérivée de l'application Kalisport, en composants standalone (dernières versions d'Angular), là où l'application Kalisport repose sur des NgModules`,
        `Couplée à Mark, le logiciel de gestion de tournoi de Kalisport`,
        `Suivi des phases de qualification et finales : programme par jour, résultats en direct`,
        `Favoris et notifications pour suivre ses clubs`,
        `Carte interactive du site : terrains, restauration, bars, parking, partenaires, zone bénévoles`,
      ],
      // TODO : chiffres de l'étude d'impact (téléchargements, utilisateurs pendant le tournoi…).
      results: [
        `Étude d'impact complète avec statistiques de fréquentation et d'usage`,
        `Publiée sur l'App Store (Xcode) et Google Play (Android Studio, Gradle)`,
      ],
    },
  },
  {
    id: 'kalisport',
    label: 'Kalisport · Web, mobile et API · Production',
    title: 'Plateforme Kalisport',
    year: '2023 – 2026',
    tagline: 'CRM-ERP web, sites vitrines et application mobile pour les associations sportives. +300 000 utilisateurs actifs.',
    mainTechs: ['PHP', 'Angular', 'TypeScript', 'Ionic', 'Capacitor'],
    allTechs: ['Smarty', 'jQuery', 'MariaDB', 'GitHub', 'Gradle', 'XCode', 'Android Studio'],
    role: 'Développement full stack (web, mobile, API), conception et développement de la majeure partie de l\'application mobile',
    gallery: [
      { src: 'assets/projects/kalisport/dashboard.webp', alt: 'Back-office : tableau de bord d\'un membre' },
      { src: 'assets/projects/kalisport/boutique.webp', alt: 'Back-office : synthèse de la boutique du club' },
      { src: 'assets/projects/kalisport/statistiques.webp', alt: 'Back-office : statistiques des adhérents' },
      { src: 'assets/projects/kalisport/mobile.webp', alt: 'Application mobile : accueil et convocation à un match' },
    ],
    caseStudy: {
      context: `Plateforme pour les associations sportives : un CRM-ERP web (membres, comptabilité, sponsoring, licences, convocations, boutique, stages, tournois, billetterie), des sites vitrines à thèmes modulables connectés au back-office, et une application mobile pour les licenciés. Les données de plusieurs fédérations (FFBB, FFF) y sont centralisées. Les priorités viennent d'une roadmap ouverte aux clients : les associations votent pour les évolutions depuis leur back-office.`,
      // TODO : signaux de lead — taille de l'équipe, arbitrages que tu as portés,
      // accompagnement d'autres devs. Ajouter le « pourquoi » des décisions.
      decisions: [
        `Web : nouvelles fonctionnalités, maintenance et refontes ponctuelles du CRM-ERP (PHP, Smarty, jQuery), avec des gains de performance`,
        `Mobile : conception et développement de la majeure partie de l'application Kalisport (Angular en NgModules, Ionic, Capacitor), prévue pour être déclinée en marque blanche pour les clubs qui en ont besoin (autonomie, fan service…)`,
        `Données : modélisation d'un hub des fédérations sportives et API REST en PHP qui centralisent leurs données`,
        `Temps réel : tentatives de mise en place, non abouties en production : messagerie temps réel avec RabbitMQ, monitoring avec Grafana / Prometheus. Prise en main de ces outils.`,
        `Les contraintes et priorités de l'infrastructure ne permettaient pas de les passer en production : à la place, un rendu quasi temps réel avec de l'asynchrone, les signals Angular et des observables`,
        `Sécurité : application des standards OWASP dans le développement`,
        `Équipe : cadrage des projets, maquettes Figma, templates de PR et d'issues, onboarding des nouveaux arrivants`,
      ],
      results: [
        `+300 000 utilisateurs actifs`,
        `Application publiée sur l'App Store (Xcode) et Google Play (Android Studio, Gradle), avec un suivi post-lancement`,
      ],
    },
  },
];
