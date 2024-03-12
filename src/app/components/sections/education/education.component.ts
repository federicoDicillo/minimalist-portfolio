import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionComponent } from '../../section/section.component';
import { education } from '@cv';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule,
            SectionComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
public education = education


}
