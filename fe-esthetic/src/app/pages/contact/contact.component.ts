import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      userName: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('User input:', this.myForm.value.userName);
    // Handle the user input as needed
  }

}
