import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SectionComponent } from '../../section/section.component';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule,
            SectionComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})


export class HeroComponent {
  @Input() name!: string;
  @Input() label!: string;
  @Input() image!: string;
  @Input() email!: string;
  @Input() phone!: string;
  @Input() url!: string;
  @Input() summary!: string;
  @Input() country!: {};
  @Input() profiles!: any[];
  

  ngOnInit(): void {
  

  }
}
