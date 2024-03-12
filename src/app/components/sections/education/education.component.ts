import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionComponent } from '../../section/section.component';
import { education, certificates } from '@cv';
import { DiplomaService } from '../../../services/diploma.service';

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
public certificates = certificates

constructor(private diplomaService: DiplomaService) {}

  toggleDiploma() {
    this.diplomaService.toggleDiplomaVisibility();
  }

  get isDiplomaVisible() {
    return this.diplomaService.isDiplomaVisible;
  }
ngOnInit(): void {

}
}
