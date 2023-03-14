import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorDirective } from './directives/color.directive';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {FormsModule} from '@angular/forms';
import { NewemployeeComponent } from './newemployee/newemployee.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ColorDirective,
    NewemployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
