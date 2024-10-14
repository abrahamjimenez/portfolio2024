import { Component } from '@angular/core';

import { ToolsAndSkillsComponent } from './tools-and-skills/tools-and-skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ToolsAndSkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
