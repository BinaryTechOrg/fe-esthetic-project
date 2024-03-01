import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionServicesComponent } from './description-services.component';

describe('DescriptionServicesComponent', () => {
  let component: DescriptionServicesComponent;
  let fixture: ComponentFixture<DescriptionServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescriptionServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
