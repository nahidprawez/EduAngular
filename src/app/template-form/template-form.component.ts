import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
    onSubmit (formData: NgForm) {
      console.log("Submit", formData)
      console.table(formData);
    }
}
