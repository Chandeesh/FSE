import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { ToasterService } from '../toaster/toaster.service';
import { User } from '../model/user';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private toaster: ToasterService) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.user.password === this.user.confirmpassword) {
      this.userService.save(this.user).subscribe(
        (data) => {
          this.gotoUserList(data);
        },
        (error) => {
          this.gotoUserList(error);
        });
    } else {
      this.toaster.showToast('Failure', 'Passwords dont match', 'failure');
    }
  }

  // tslint:disable-next-line: typedef
  gotoUserList(response: HttpResponse<Object>) {
    if (response.status == 200) {
      this.toaster.showToast('Success', 'Mail sent', 'success');
      this.router.navigate(['/loginuser'])
    } else {
      this.toaster.showToast('Failure', 'UserName already exists', 'failure');
    }
  }
}
