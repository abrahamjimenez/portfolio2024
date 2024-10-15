import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences: { company: string; title: string; description: string[] }[] = [
    {
      company: 'Subitt',
      title: 'Full-stack Web Developer',
      description: [
        'Authored administrative functions, organizing hundreds of customer accounts.',
        'Influenced the use of a library to create graphical interfaces and visualizations.',
      ],
    },
  ];
}
