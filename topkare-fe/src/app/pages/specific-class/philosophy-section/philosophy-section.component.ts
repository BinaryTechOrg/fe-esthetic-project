import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-philosophy-section',
  templateUrl: './philosophy-section.component.html',
  styleUrl: './philosophy-section.component.css'
})
export class PhilosophySectionComponent implements OnInit {
  @Input() item: any;
  showMoreInfo : boolean = false;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //console.log(this.item);
  }

  toggleMoreInfo(): void { // Add this method
    this.showMoreInfo = !this.showMoreInfo;
  }
}
