import { Component, OnDestroy } from '@angular/core';
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

  constructor(private loaderService: LoaderService) {
    this.loadingSubscription = this.loaderService.isLoading.subscribe((isLoading) => {
      // Schedule the update to happen in the next JavaScript event loop iteration
      console.log("loading")
      setTimeout(() => {
        this.loading = isLoading;
        console.log("is it?")
      });
    });
  }

  ngOnDestroy(): void {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
  }
}
