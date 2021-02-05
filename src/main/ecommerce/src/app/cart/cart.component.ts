import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart';
import { ToasterService } from '../toaster/toaster.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart[];
  status: string;
  total: number;
  
  constructor(private toaster: ToasterService) {

   }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem("cart"));
    this.total=0;
    for(let i=0; i<this.cart.length; i++) {
    this.cart[i].price=+this.cart[i].price;
    this.total=this.total+this.cart[i].price;
	}
	this.total = this.total-50;
	console.log(this.total+"asdsad");
  }

  placeOrder() {
    this.toaster.showToast("Order","Order Placed","success");
    this.status = "ordered";
  }
}
