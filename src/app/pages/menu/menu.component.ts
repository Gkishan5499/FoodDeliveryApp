import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public productList:any;

  constructor(private service:OrderDetailsService,
              private cartservice:CartService) { }
  foodData:any;
  
  ngOnInit(): void {
      this.foodData=this.service.foodDetails;
    
  
    
  }
  addtoCart(fd:any){
    this.cartservice.addToCart(fd);

  }

}
