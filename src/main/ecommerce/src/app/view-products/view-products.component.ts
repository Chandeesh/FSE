import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { ToasterService } from '../toaster/toaster.service';
import { Cart } from '../model/cart';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  product: Product[];
  cart: Array<Cart> = [];
  address: string;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private toaster: ToasterService) {

  }

  ngOnInit() {
    this.userService.getProducts().subscribe(data => {
      this.product = data;
    });
	this.userService.getAddress(localStorage.getItem("token")).subscribe(data => {
	      this.address = data;
	    });
  }

  addBuy(name: string, price: number, qty: number) {
    let cartOnj = new Cart();
    cartOnj.name = name;
    cartOnj.price = price;
    cartOnj.qty = qty;
    cartOnj.purchaseType = "Buy";
    cartOnj.address=this.address;
    this.cart.push(cartOnj);
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.toaster.showToast("Cart", "Item added to cart", "success");
  }

  addRent(name: string, price: number, qty: number) {
    let cartOnj = new Cart();
    cartOnj.name = name;
    cartOnj.price = price;
    cartOnj.qty = qty;
    cartOnj.purchaseType = "Rent";
    cartOnj.address=this.address;
    console.log(this.address+"address");
    this.cart.push(cartOnj);
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.toaster.showToast("Cart", "Item added to cart", "success");
  }

}
