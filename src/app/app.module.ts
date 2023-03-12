import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorDirective } from './directives/color.directive';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
