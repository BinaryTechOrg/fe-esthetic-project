// loading.service.ts
import { Injectable } from '@angular/core';
import { NavigationStart, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private _isLoading = new BehaviorSubject<boolean>(false);
  public readonly isLoading = this._isLoading.asObservable();

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.startLoading();
      } else if (event instanceof NavigationEnd) {
        this.stopLoading();
      }
      // Consider other Router events like NavigationCancel and NavigationError
    });
  }

  startLoading() {
    this._isLoading.next(true);
  }

  // In your LoaderService or component
  stopLoading() {
    setTimeout(() => this._isLoading.next(false), 1000); // Delay stopping the loader
  }
}
