import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { ToasterService } from '../toaster/toaster.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private route: ActivatedRoute, private router: Router, private toaster: ToasterService, private userService: UserService) {
  }

  logout() {
    localStorage.setItem('isLoggedIn', "false");
    this.router.navigate(['/loginuser']);
  }

  sell() {
    this.router.navigate(['sellproducts'], { relativeTo: this.route });
  }

  view() {
    this.router.navigate(['viewproducts'], { relativeTo: this.route });
  }

  goToCart() {
        this.router.navigate(['cart'], { relativeTo: this.route });
  }
  
  complaint() {
      this.router.navigate(['complaints'], { relativeTo: this.route });
  }
}
