import { Injectable, signal } from '@angular/core';
import {
  BEYOND_CARDS,
  BeyondCard,
  CONTACT_INFO,
  HERO_INFO,
  Project,
  PROJECTS,
  SKILL_DOMAINS,
  SkillDomain,
  STACK_CHIPS,
  STATS,
  Stat,
  StackChip,
} from '../data/portfolio.data';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly heroInfo = HERO_INFO;
  readonly stats: Stat[] = STATS;
  readonly stackChips: StackChip[] = STACK_CHIPS;
  readonly projects: Project[] = PROJECTS;
  readonly skillDomains: SkillDomain[] = SKILL_DOMAINS;
  readonly beyondCards: BeyondCard[] = BEYOND_CARDS;
  readonly contactInfo = CONTACT_INFO;

  readonly featuredProject: Project =
    PROJECTS.find((p) => p.featured) ?? PROJECTS[0];

  readonly regularProjects: Project[] = PROJECTS.filter((p) => !p.featured);

  readonly activeDomain = signal<string>(SKILL_DOMAINS[0].id);

  setActiveDomain(id: string): void {
    this.activeDomain.set(id);
  }

  getActiveDomainSkills(): SkillDomain {
    return (
      SKILL_DOMAINS.find((d) => d.id === this.activeDomain()) ??
      SKILL_DOMAINS[0]
    );
  }
}
