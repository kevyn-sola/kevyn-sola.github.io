import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  frontendSkills: Skill[] = [
    { name: 'Angular', icon: 'devicon-angular-plain' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'Ionic', icon: 'devicon-ionic-original colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'SCSS', icon: 'devicon-sass-original colored' },
  ];

  backendSkills: Skill[] = [
    { name: 'PHP', icon: 'devicon-php-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  ];

  toolsSkills: Skill[] = [
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original' },
    { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
    { name: 'Figma', icon: 'devicon-figma-plain colored' },
  ];
}
