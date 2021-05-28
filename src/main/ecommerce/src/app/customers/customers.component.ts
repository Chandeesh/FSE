import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { ToasterService } from '../toaster/toaster.service';
import { User } from '../model/user';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

	customer: User[];

	constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private toaster: ToasterService) {
  }

  ngOnInit(): void {
	  this.userService.getCustomers().subscribe(data => {
	      this.customer = data;
	    });
  }
  logout() {
	    localStorage.setItem('isLoggedIn', "false");
	    this.router.navigate(['/loginuser']);
	  }

	customers() {
	    this.router.navigate(['/customers']);
	}
	
	complaint() {
	    this.router.navigate(['/managecomplaints']);
	}
}
