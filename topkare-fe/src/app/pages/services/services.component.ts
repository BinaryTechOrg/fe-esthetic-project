import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { UnderHeaderServicesComponent } from './under-header-services/under-header-services.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { CarouselComponent } from '../../common/carousel/carousel.component';
import { CarouselServicesComponent } from './carousel-services/carousel-services.component';
import { DescriptionAreaComponent } from '../home/description-area/description-area.component';
import { CardsSectionComponent } from './cards-section/cards-section.component';
import { Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../Services/DataService/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  itemData: any;
  serviceId: number | null = null; // You can convert this to number based on your needs
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
        this.serviceId = parseInt(id, 10); // Convert string parameter to a number
        this.dataService.getCourseById(this.serviceId).subscribe({
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

