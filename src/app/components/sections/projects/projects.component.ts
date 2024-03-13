import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../section/section.component';

import { projects } from "@cv";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    SectionComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

public projects = projects;

}
