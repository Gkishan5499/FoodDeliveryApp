import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';



import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ProductsComponent } from '../products/products.component';
import { ProductCreateComponent } from '../product-create/product-create.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminComponent,
    
    ProductEditComponent,
    ProductsComponent,
    ProductCreateComponent,
  
   
  ],
  imports: [
    CommonModule,
    RouterModule
   
   
  ],
 
})
export class AdminModule { }
