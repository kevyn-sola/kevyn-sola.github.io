import { isDevMode } from '@angular/core';

/**
 * Étapes du parcours, de la plus ancienne à la plus récente.
 *
 * Une étape sans `period` n'est pas publiée : elle n'apparaît qu'en local
 * (`npm start`), marquée « à compléter ». La section entière reste cachée
 * en production tant qu'il y a moins de 2 étapes complètes.
 */
export interface CareerStep {
  period: string;
  title: string;
  place?: string;
  description?: string;
  /**
   * Mise en forme de l'étape :
   * - 'current' : situation actuelle, mise en avant
   * - 'future'  : objectif, grisé et secondaire
   * - 'minor'   : étape hors tech, affichée en compact
   * Sans valeur : étape passée classique.
   */
  kind?: 'current' | 'future' | 'minor';
}

export const CAREER: CareerStep[] = [
  {
    period: '2011 - 2016',
    title: 'Ingénierie du son',
    place: 'Intermittent, France - Suisse',
    description:
      "Planification des tournages et encadrement des équipes son. Interface entre techniciens et clients, avec une exigence constante sur la qualité du rendu.",
  },
  {
    period: '2016 - 2018',
    title: 'Opérateur de production, puis chef de ligne et qualité',
    place: 'Dior, Saint-Jean-de-Braye',
    description: 'Rigueur et encadrement d\'équipe sur une ligne de production.',
    kind: 'minor',
  },
  {
    period: '2018 - 2022',
    title: 'Conducteur de bus et tram',
    place: 'Keolis, Orléans',
    description: 'Relation client au quotidien et gestion du stress.',
    kind: 'minor',
  },
  {
    period: '2022 - 2023',
    title: 'Reconversion vers le développement',
    place: 'Wild Code School, Orléans',
    description: 'Bootcamp financé personnellement. Titre Développeur Web & Mobile (niveau 5, équivalent Bac+2).',
  },
  {
    period: '2023 - 2024',
    title: 'Développeur Full Stack en alternance',
    place: 'Kalisport',
    description: 'En parallèle, formation à distance avec la Wild Code School. Titre Concepteur Développeur d\'Application (niveau 6, équivalent Bac+3/4).',
  },
  {
    period: '2024 - aujourd’hui',
    title: 'Ingénieur Logiciel',
    place: 'Kalisport',
    description:
      'Évolution du CRM-ERP web des associations sportives (PHP, Smarty, jQuery). Développement de plusieurs applications mobiles (Kalisport, FCGM Champions League, Mark) pour plus de 300 000 sportifs, et des API REST qui centralisent les données de plusieurs fédérations. Maintenance et évolution du framework PHP interne. Côté organisation : cadrage des projets, maquettes Figma, templates de PR et d\'issues, onboarding des nouveaux arrivants. Support utilisateurs et échanges directs avec les clients.',
    kind: 'current',
  },
  {
    period: 'À moyen terme',
    title: 'Engineering Manager',
    place: '',
    description: 'Évoluer vers le management d\'équipe, en m\'appuyant sur mon goût pour la technique et le mentorat.',
    kind: 'future',
  },
];

export const isStepComplete = (step: CareerStep): boolean => !!step.period && !!step.title;

/** Section affichée en local, ou en production dès 2 étapes complètes. */
export const showCareer = (): boolean =>
  isDevMode() || CAREER.filter(isStepComplete).length >= 2;
