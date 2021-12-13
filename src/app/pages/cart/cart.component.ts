import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:OrderDetailsService) { }
  getProductId:any;
  productData:any;
  totalItem:any;
  empty:any;

  ngOnInit(): void {
    this.getProductId=this.param.snapshot.paramMap.get('id');
    if(this.getProductId){
      this.productData=this.service.foodDetails.filter((value)=>{
        return value.id == this.getProductId;

      })
    }
    
    let grandtotal=0;
   this.totalItem= this.service.foodDetails.map((a:any,index:any)=>{
      grandtotal=a.total;
   });
    

    }
   
     
  

}
