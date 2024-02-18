import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-masonry',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './masonry.component.html',
  styleUrl: './masonry.component.css'
})
export class MasonryComponent {

}
