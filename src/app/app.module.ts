import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './AdminPortal/admin/admin.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/HomeComponent';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { CartComponent } from './pages/cart/cart.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    MenupageComponent,
    CartComponent,
    HomeComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
