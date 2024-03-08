import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../section/section.component';


import { skills } from '@cv';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
            SectionComponent,
            CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  public skills = skills;
}
