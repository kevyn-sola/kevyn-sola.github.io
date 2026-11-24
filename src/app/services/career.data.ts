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
}

export const CAREER: CareerStep[] = [
  {
    // TODO : dates, poste exact, structure(s). Ce que ce métier t'a appris
    // et que tu réutilises aujourd'hui (rigueur du direct, travail avec des artistes/clients…).
    period: '',
    title: 'Ingénierie du son',
    place: '',
    description: '',
  },
  {
    // TODO : dates, formation suivie (école, diplôme, autodidacte ?), pourquoi ce choix.
    period: '',
    title: 'Reconversion vers le développement',
    place: '',
    description: '',
  },
  {
    // TODO : date d'arrivée exacte et évolution du poste (dev → lead ?).
    period: '2023 – aujourd’hui',
    title: 'Développeur Full Stack',
    place: 'Kalisport',
    description:
      'Développement de plusieurs applications mobiles (Kalisport, FCGM Champions League, Mark) pour plus de 300 000 sportifs, conception des API REST qui centralisent les données de plusieurs fédérations.',
  },
  {
    // TODO : ce que tu vises et pourquoi (tech lead, engineering manager…).
    // Laisser `period` vide tant que tu ne veux pas l'afficher.
    period: '',
    title: 'La suite',
    place: '',
    description: '',
  },
];

export const isStepComplete = (step: CareerStep): boolean => !!step.period && !!step.title;

/** Section affichée en local, ou en production dès 2 étapes complètes. */
export const showCareer = (): boolean =>
  isDevMode() || CAREER.filter(isStepComplete).length >= 2;
