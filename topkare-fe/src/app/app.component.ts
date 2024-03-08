import { Component } from '@angular/core';
import { LoaderService } from './Services/LoaderService/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'topkare';
  constructor(public loaderService: LoaderService) {}

}
