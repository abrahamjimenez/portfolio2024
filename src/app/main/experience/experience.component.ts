import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences: { company: string; title: string; description: string }[] = [
    {
      company: 'Subitt',
      title: 'Full-stack Web Developer',
      description: '',
    },
  ];
}
