import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SwitchService } from '../../services/switch.service';
import { certificates } from '@cv'

@Component({
  selector: 'app-modal-certificate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-certificate.component.html',
  styleUrl: './modal-certificate.component.css'
})
export class ModalCertificateComponent {
@Input() diploma!: string;

public certificates = certificates;

constructor(private modalS: SwitchService){}

closeModal(){

  this.modalS.$modal.emit(false)

}


}
