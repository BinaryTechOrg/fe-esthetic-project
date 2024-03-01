import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../Services/DataService/data.service';

@Component({
  selector: 'app-courses-section',
  templateUrl: './courses-section.component.html',
  styleUrl: './courses-section.component.css'
})
export class CoursesSectionComponent implements OnInit{
  items: any[] = [];
  constructor(private dataService : DataService){
    this.dataService.getCourses().subscribe(data => {
      this.items = data;
      console.log(data)
    });
    }

  ngOnInit(): void {

  }
}
