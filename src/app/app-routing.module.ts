import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './AdminPortal/admin/admin.component';
import { ProductCreateComponent } from './AdminPortal/product-create/product-create.component';
import { ProductEditComponent } from './AdminPortal/product-edit/product-edit.component';
import { ProductsComponent } from './AdminPortal/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from "./pages/home/HomeComponent";
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'cart/:id',component:CartComponent},
  {path:'admin',component:AdminComponent,
  children:[
  {path:'products',component:ProductsComponent},
  {path:'products/create',component:ProductCreateComponent},
  {path:'products/:id/edit',component:ProductEditComponent}
]
  
}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
