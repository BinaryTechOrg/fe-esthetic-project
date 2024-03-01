import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-slider',
  templateUrl: './testimonial-slider.component.html',
  styleUrl: './testimonial-slider.component.css'
})
export class TestimonialSliderComponent {
  @Input() testimonies: any[] = []

  @Input() indicator = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 2000;

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
      this.selectedIndex = this.testimonies.length - 1;
    } else {
      this.selectedIndex --;
    }
  }

  onNext(): void{
    if(this.selectedIndex === this.testimonies.length - 1){
      this.selectedIndex = 0;
    } else {
      this.selectedIndex ++;
    }
  }

}
