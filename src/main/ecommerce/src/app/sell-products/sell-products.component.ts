import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { ToasterService } from '../toaster/toaster.service';

@Component({
  selector: 'app-sell-products',
  templateUrl: './sell-products.component.html',
  styleUrls: ['./sell-products.component.css']
})
export class SellProductsComponent implements OnInit {

  product: Product;

   constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private toaster: ToasterService) {
    this.product = new Product();
   }

  ngOnInit(): void {
  }

  onSubmit() {
   
      this.userService.addProduct(this.product).subscribe(
        (data) => {
          this.gotoUserList(data);
        },
        (error) => {
          this.gotoUserList(error);
        });
  }

  // tslint:disable-next-line: typedef
  gotoUserList(response: HttpResponse<Object>) {
    if (response.status == 200) {
      this.toaster.showToast('Success', 'Product Added', 'success');
      this.router.navigate(['viewproducts'])
    } else {
      this.toaster.showToast('Failure', 'Failed Try again', 'failure');
    }
  }

  goToViewProducts() {
          this.router.navigate(['viewproducts'])
  }
}
