import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { ToasterService } from '../toaster/toaster.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	constructor(private route: ActivatedRoute, private router: Router, private toaster: ToasterService, private userService: UserService) {
	  }
	
	ngOnInit(): void {
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
