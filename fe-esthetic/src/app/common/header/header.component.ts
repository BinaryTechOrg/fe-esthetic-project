import { Component, ComponentFactoryResolver, ComponentRef, HostListener, NgZone, OnInit, ViewContainerRef } from '@angular/core';
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
  isMobile = false;
  sidebarRef: ComponentRef<SidebarmenuComponent> | null = null;

  constructor(private resolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private ngZone: NgZone
    ) {}

  ngOnInit() {
    this.checkMobile();
  }

  private checkMobile() {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth < 1220;
      this.ngZone.run(() => {}); // Run change detection
      console.log("boo") // Adjust the threshold as needed
    }
    console.log(this.isMobile)
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
