import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-images',
  templateUrl: './slider-images.component.html',
  styleUrl: './slider-images.component.css',
})
export class SliderImagesComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() indicator = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 4000;

  selectedIndex = 0;
  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  // Change image every 4 seconds
  autoSlideImages(): void{
    setInterval(() =>{
      this.onNext();
    }, this.slideInterval);
  }

  selectImg(index : number): void{
    this.selectedIndex = index;
  }

  onPrev(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.items.length - 1;
    } else {
      this.selectedIndex --;
    }
  }

  onNext(): void{
    if(this.selectedIndex === this.items.length - 1){
      this.selectedIndex = 0;
    } else {
      this.selectedIndex ++;
    }
  }

}
