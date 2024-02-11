import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { PhilosophySectionComponent } from './philosophy-section/philosophy-section.component';
import { CardSectionComponent } from './card-section/card-section.component';
import { OverallDescComponent } from './overall-desc/overall-desc.component';

@Component({
  selector: 'app-specific-class',
  standalone: true,
  imports: [HeaderComponent, PhilosophySectionComponent, CardSectionComponent, OverallDescComponent,FooterComponent],
  templateUrl: './specific-class.component.html',
  styleUrl: './specific-class.component.css'
})
export class SpecificClassComponent {

}
