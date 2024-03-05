import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeroComponent } from './components/sections/hero/hero.component';
import { AboutComponent } from './components/sections/about/about.component';
import { ExperienceComponent } from './components/sections/experience/experience.component';
import { ProjectsComponent } from './components/sections/projects/projects.component';
import { EducationComponent } from './components/sections/education/education.component';
import { SkillsComponent } from './components/sections/skills/skills.component';
import { KeyboardManagerComponent } from './components/keyboard-manager/keyboard-manager.component';

import { basics } from '@cv';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet,
            HeroComponent,
            AboutComponent,
            ExperienceComponent,
            ProjectsComponent,
            EducationComponent,
            SkillsComponent,
            KeyboardManagerComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  public info = basics;


  ngOnInit(): void {
    document.title = `Portfolio de ${basics.name}`;

  }
}
