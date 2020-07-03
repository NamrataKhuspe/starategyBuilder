import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.router.navigateByUrl('home');
  }
  onSignup(): void {
    this.router.navigateByUrl('usersignup');
  }

  // login(user: User){
  //   if (user.userName !== '' && user.password !== '' ) { // {3}
  //     this.loggedIn.next(true);
  //     this.router.navigate(['/']);
  //   }
  // }

}
