import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/userlogin';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { ToasterService } from '../toaster/toaster.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  user: UserLogin;

  constructor(private route: ActivatedRoute, private router: Router, private toaster: ToasterService, private userService: UserService) {
    this.user = new UserLogin();
  }

  ngOnInit() {
  if (localStorage.getItem('isLoggedIn')) {
      this.router.navigate(['/products']);
    }
  }

 
  onSubmit() {
    this.userService.loginuser(this.user).subscribe(
      (data) => {
        this.success(data);
      },
      (error) => {
        this.success(error);
      });
  }

  success(response: HttpResponse<UserLogin>) {
    if (response.status == 200) {
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('token', this.user.email);
      if(this.user.email=="admin"){
    	  this.router.navigate(['/admin']);
      } else {
      this.router.navigate(['/products']);
      }
    } else {
      this.toaster.showToast('Failure', 'Incorrect Credentials', 'failure');
    }
  }
}
