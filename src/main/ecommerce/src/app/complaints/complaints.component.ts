import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { ToasterService } from '../toaster/toaster.service';
import { Complaint } from '../model/complaint';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

	complaint: Complaint;
	constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private toaster: ToasterService) {
	    this.complaint = new Complaint();
	    this.complaint.name=localStorage.getItem("token");
	   }

  ngOnInit(): void {
  }
  
  onSubmit() {
	   
      this.userService.raiseComplaint(this.complaint).subscribe(
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
      this.toaster.showToast('Success', 'Ticket Raised', 'success');
      this.router.navigate(['viewproducts'])
    } else {
      this.toaster.showToast('Failure', 'Failed Try again', 'failure');
    }
  }

  goToViewProducts() {
          this.router.navigate(['viewproducts'])
  }
}
