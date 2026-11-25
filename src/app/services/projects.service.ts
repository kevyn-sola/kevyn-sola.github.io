import { Injectable } from '@angular/core';
import { PROJECTS } from './projects.data';

/**
 * Étude de cas affichée dans la liste des projets.
 * Chaque bloc vide (chaîne vide ou tableau vide) n'est pas affiché :
 * on peut remplir progressivement sans publier de texte provisoire.
 */
export interface CaseStudy {
  /** Le problème ou le besoin de départ. */
  context?: string;
  /** Choix faits et, idéalement, pourquoi. */
  decisions?: string[];
  /** Ce que ça a produit : chiffres, retours, mise en production. */
  results?: string[];
}

/** Image d'un carrousel : `alt` sert aussi de légende. */
export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  label: string;
  title: string;
  year: string;
  tagline: string;
  mainTechs: string[];
  allTechs: string[];
  role?: string;
  caseStudy?: CaseStudy;
  /**
   * Visuel de présentation affiché à droite du projet dans la liste
   * (mockup, icône…). N'ouvre pas la page détail : seules les captures
   * dans `images` le font.
   */
  visual?: string;
  /** Plusieurs visuels : remplace `visual` par un carrousel. */
  gallery?: GalleryImage[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = PROJECTS;

  getProjects(): Project[] {
    return this.projects;
  }

}
