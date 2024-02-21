import { Component, ComponentFactoryResolver, ComponentRef, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { NgIf } from '@angular/common';
import { SidebarmenuComponent } from '../sidebarmenu/sidebarmenu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMobile = true;
  sidebarRef: ComponentRef<SidebarmenuComponent> | null = null;

  constructor(private resolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    this.checkMobile();
  }

  private checkMobile() {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth < 1220; // Adjust the threshold as needed
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkMobile();
  }

  toggleMobileMenu() {
      // Open the sidebar by creating a dynamic component
      const factory = this.resolver.resolveComponentFactory(SidebarmenuComponent);
      this.sidebarRef = this.viewContainerRef.createComponent(factory);
    }
}
