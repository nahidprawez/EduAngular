import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorDirective } from './directives/color.directive';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {FormsModule} from '@angular/forms';
import { NewemployeeComponent } from './newemployee/newemployee.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TemplateFormComponent } from './template-form/template-form.component';


const routes: Routes = [
   {path : "", component : HomeComponent},
   {path : "contact", component : ContactComponent},
   {path : "products", component : ProductComponent},
   {path : "product-details/:id", component : ProductDetailsComponent},
   {path : "not-found", component : ErrorPageComponent, data : {message : "Page Not Found!"}},
   {path : "**", redirectTo : "/not-found", pathMatch : "full"},
] 

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ColorDirective,
    NewemployeeComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    ErrorPageComponent,
    ProductDetailsComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
