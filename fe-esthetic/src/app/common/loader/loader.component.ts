// loader.component.ts
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';
import { LoaderService } from '../../Services/LoaderService/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [NgIf],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoaderComponent {
  @Input() loading: boolean = false;

  fetchData() {
    this.loading = true;
    // Perform your data loading logic here
    // Once data is loaded, set isLoading to false
  }}
