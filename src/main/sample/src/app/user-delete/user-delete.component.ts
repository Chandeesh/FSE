import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { ToasterService } from '../toaster/toaster.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent {

  user: User;
  response: Response;
  status: string;
  
  constructor(private userService: UserService,private toaster:ToasterService) {
    this.user = new User();    
  }

  onSubmit() {
    this.userService.delete(this.user.id).subscribe(
       (data) => {
       				 this.success(data);
       			},
        (error) => {
       				 this.success(error);
          });
  }
  
  success(response:Response) {
   if(response.status==200) {
		this.toaster.showToast('Success', 'User Deleted Successfully', 'success');
   } else {
		this.toaster.showToast('Failure', 'Record Not Found', 'failure');
   }    
   }
}
