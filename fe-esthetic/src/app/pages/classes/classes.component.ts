import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { CoursesSectionComponent } from './courses-section/courses-section.component';
import { CardsDescComponent } from './cards-desc/cards-desc.component';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [HeaderComponent, CoursesSectionComponent, CardsDescComponent, FooterComponent],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {

}
