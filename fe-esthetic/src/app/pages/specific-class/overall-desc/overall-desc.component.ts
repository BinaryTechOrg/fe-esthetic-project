import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-overall-desc',
  standalone: true,
  imports: [NgFor],
  templateUrl: './overall-desc.component.html',
  styleUrl: './overall-desc.component.css'
})
export class OverallDescComponent {
  items = [
    {id: 1, title: 'Alignment and input workshops', desc: 'In the initial phase, we work closely with you to understand your business needs, objectives, and knowledge gaps. Through interactive workshops, we align on the project scope, discuss the business context, and gather enough input so we can help you define your goals and create the winning strategy.'},
    {id: 2, title: 'Alignment and input workshops', desc: 'In the initial phase, we work closely with you to understand your business needs, objectives, and knowledge gaps. Through interactive workshops, we align on the project scope, discuss the business context, and gather enough input so we can help you define your goals and create the winning strategy.'},
    {id: 3, title: 'Alignment and input workshops', desc: 'In the initial phase, we work closely with you to understand your business needs, objectives, and knowledge gaps. Through interactive workshops, we align on the project scope, discuss the business context, and gather enough input so we can help you define your goals and create the winning strategy.'},
  ]
}
