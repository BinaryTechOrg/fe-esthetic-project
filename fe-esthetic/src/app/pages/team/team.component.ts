import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterTeamComponent } from './footer-team/footer-team.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [HeaderComponent, FooterTeamComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

}
