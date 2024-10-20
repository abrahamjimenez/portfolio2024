import { Component } from '@angular/core';

@Component({
  selector: 'app-tools-and-skills',
  standalone: true,
  imports: [],
  templateUrl: './tools-and-skills.component.html',
  styleUrl: './tools-and-skills.component.scss',
})
export class ToolsAndSkillsComponent {
  skills: string[] = [
    'JavaScript',
    'HTML',
    'CSS',
    'React.js',
    'Node.js',
    'MongoDB',
    'GraphQL',
    'Next.js',
    'TypeScript',
    'Git/Github',
    'API',
    'Tailwind',
    'Figma',
    'Trello',
    'Jira Software',
    'PostgreSQL',
    'InDesign',
    'Illustrator',
    'Photoshop',
    'Spanish (fluent)',
  ];
}
