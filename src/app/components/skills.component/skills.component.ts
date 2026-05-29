import { Component } from '@angular/core';

interface Skill {
  name: string;
  hot?: boolean;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillsForward: Skill[] = [
    { name: 'Angular', hot: true },
    { name: 'Java', hot: true },
    { name: 'Spring Boot', hot: true },
    { name: 'Spring Security', hot: true },
    { name: 'Spring Data JPA', hot: true },
    { name: 'NestJS' },
    { name: 'TypeScript' },
    { name: 'PHP' },
    { name: 'PostgreSQL' },
    { name: 'MariaDB' },
    { name: 'Docker' },
    { name: 'Ionic', hot: true },
    { name: 'Capacitor', hot: true },
    { name: 'Gradle' },
    { name: 'Maven' },
    { name: 'REST API' },
  ];

  skillsReverse: Skill[] = [
    { name: 'Grafana' },
    { name: 'Prometheus' },
    { name: 'WebSockets' },
    { name: 'OWASP' },
    { name: 'Scrum' },
    { name: 'CI/CD' },
    { name: 'Git' },
    { name: 'Linux' },
    { name: 'Prisma ORM' },
    { name: 'Hibernate' },
    { name: 'NextJS' },
    { name: 'HTML/SCSS' },
    { name: 'TDD' },
    { name: 'MVC' },
    { name: 'IoC/DI' },
    { name: 'Figma' },
  ];
}
