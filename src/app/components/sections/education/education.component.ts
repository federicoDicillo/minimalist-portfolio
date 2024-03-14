import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SectionComponent } from '../../section/section.component';
import { ModalCertificateComponent } from '../../modal-certificate/modal-certificate.component';
import { education, certificates } from '@cv';
import { SwitchService } from '../../../services/switch.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule,
            SectionComponent,
            ModalCertificateComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
public education = education
public certificates = certificates

modalSwitch:boolean = false;
diplomaExt:String = '';

constructor(private modalS: SwitchService) {}

ngOnInit() {

  this.modalS.$modal.subscribe((value)=>{
    this.modalSwitch = value
  })


}


openModal(diploma: String){
  this.modalSwitch = true;
  this.diplomaExt = diploma;
}
}
