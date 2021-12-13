import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 public totalItem:number=0;
  constructor(private cartservice:CartService) { }
 

  ngOnInit(): void {
    this.cartservice.getProduct()
    .subscribe(res=>{
      this.totalItem=res.length;
    })
  }

}
