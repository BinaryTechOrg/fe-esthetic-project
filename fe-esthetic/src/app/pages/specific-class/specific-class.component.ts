import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { PhilosophySectionComponent } from './philosophy-section/philosophy-section.component';
import { CardSectionComponent } from './card-section/card-section.component';
import { OverallDescComponent } from './overall-desc/overall-desc.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-specific-class',
  standalone: true,
  imports: [HeaderComponent, PhilosophySectionComponent, CardSectionComponent, OverallDescComponent,FooterComponent],
  templateUrl: './specific-class.component.html',
  styleUrl: './specific-class.component.css'
})
export class SpecificClassComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Specifics');
  }
}
