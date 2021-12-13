import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails
foodDetails=[
  {
    id:1,
    foodName:"Chockolate Cake",
    foodDetails:"Chocolate(500gms)",
    foodPrice:250,
    foodImg:'../../../assets/img/cake.jpg'
  },

  {
    id:2,
    foodName:"Ice Cream",
    foodDetails:"Oreio Choco",
    foodPrice:150,
    foodImg:'../../../assets/img/IceCream.jpg'
  },

  {
    id:3,
    foodName:"Briyaani ",
    foodDetails:"Chicken Biryaani",
    foodPrice:200,
    foodImg:'../../../assets/img/biryaani.jpg'
  },
  {
    id:4,
    foodName:"Pizza ",
    foodDetails:"Cheezy Pizza",
    foodPrice:250,
    foodImg:'../../../assets/img/pizza.jpg'
  },

  {
    id:5,
    foodName:"Burgar ",
    foodDetails:"Spicy burgar",
    foodPrice:200,
    foodImg:'../../../assets/img/burgar.jpg'
  }


]

getProduct(){
  return this.foodDetails;
}

}
