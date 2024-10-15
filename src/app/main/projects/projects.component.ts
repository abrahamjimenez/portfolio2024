import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      title: "Abraham's Shop",
      tools: ['MongoDB', 'Express', 'React', 'Node', 'Redux'],
      description: '',
    },
    {
      title: 'HeartSet',
      tools: [
        'HTML',
        'SCSS',
        'JavaScript',
        'Adobe Illustrator',
        'Adobe Photoshop',
      ],
      description: '',
    },
    {
      title: 'Book of Mormon English Learning App',
      tools: ['HTML', 'CSS', 'Javascript'],
      description: '',
    },
  ];
}
