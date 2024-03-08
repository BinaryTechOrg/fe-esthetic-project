import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../Services/LoaderService/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnDestroy {
  loading: boolean = false;
  private loadingSubscription: Subscription;

  constructor(private loaderService: LoaderService, private cdRef: ChangeDetectorRef) {
    this.loadingSubscription = this.loaderService.isLoading.subscribe((isLoading) => {
      this.loading = isLoading;
      this.cdRef.detectChanges(); // Manually trigger change detection
    });
  }

  ngOnDestroy(): void {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
  }
}
