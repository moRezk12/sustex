import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-golden',
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './golden.component.html',
  styleUrl: './golden.component.css'
})
export class GoldenComponent {

 myForm: FormGroup;

  models = ['Model A', 'Model B', 'Model C'];
  standards = ['Standard X', 'Standard Y', 'Standard Z'];

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      modelOfExcellence: ['', Validators.required],
      standardOfExcellence: ['', Validators.required],
      keyPracticesDescription: ['', Validators.required],
      website: ['', Validators.required],
      socialMedia: ['', Validators.required],
      pdfFile: [null]
    });
  }

  generate() {
    if (this.myForm.valid) {
      console.log('Form Data:', this.myForm.value);
      alert('Data saved successfully!');
      this.myForm.reset();
    } else {
      this.myForm.markAllAsTouched();
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.myForm.patchValue({ pdfFile: file });
    } else {
      alert('Please select a PDF file.');
    }
  }

}
