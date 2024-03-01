import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DataService } from '../../Services/DataService/data.service';

@Component({
  selector: 'app-specific-class',
  templateUrl: './specific-class.component.html',
  styleUrls: ['./specific-class.component.css'] // Make sure this is styleUrls, not styleUrl
})
export class SpecificClassComponent implements OnInit {
  itemData: any;
  courseId: number | null = null; // You can convert this to number based on your needs
  imgUrl: any;

  constructor(
    private titleService: Title,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.courseId = parseInt(id, 10); // Convert string parameter to a number
        this.dataService.getCourseById(this.courseId).subscribe({
          next: (data) => {
            this.itemData = data;
           },
          error: (error) => {
             console.error('Error fetching course data:', error);
            }
        });

      }
    });
  }
}
