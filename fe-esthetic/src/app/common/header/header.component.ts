import { Component, HostListener, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMobile = false;

  ngOnInit() {
    this.checkMobile();
  }

  private checkMobile() {
    if (typeof window !== 'undefined'){
    this.isMobile = window.innerWidth < 1220; // Adjust the threshold as needed
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkMobile();
  }
}
