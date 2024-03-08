import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../section/section.component';

import { work } from '@cv';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule,
            SectionComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
public works = work;


}
