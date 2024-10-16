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
      description: [
        'Spearheaded "Abraham\'s Shop," developing an MERN stack e-commerce site with PayPal integration, admin features, and secure routes, showcasing proactive initiative.',
        'Demonstrated hands-on initiative in realizing a dynamic e-commerce platform goal using MERN stack expertise, seamlessly integrating PayPal, admin features, and secure routes.',
      ],
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
      description: [
        'Led the development of website layouts, prioritizing design and user experience.',
        'Engaged in team-based problem-solving to address intricate DOM bugs, implementing CSS troubleshooting techniques for a seamless and improved user experience across a diverse user base.',
      ],
    },
    {
      title: 'Book of Mormon English Learning App',
      tools: ['HTML', 'CSS', 'Javascript'],
      description: [
        "Spearheaded the creation of a personalized project aimed at enhancing the client's English proficiency.",
      ],
    },
  ];
}
