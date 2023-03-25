import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
   reactiveForm : FormGroup;
   
   ngOnInit() {
      this.reactiveForm = new FormGroup({
        fullname : new FormControl(null),
         address : new FormControl(null),
         city : new FormControl(null),
         email : new FormControl(null),
         phonenumber : new FormControl(null),
         password : new FormControl(null),
         cpassword : new FormControl(null),
         grnameCheck : new FormControl(null),
      })
   }

   onSubmit() {
     console.log(this.reactiveForm.value)
   }
}
