import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    // backend
    this.authService.login('1')
      .subscribe(resp => {
         
        if(resp.id) {
          this.router.navigate(['/heroes'])
        }
        
      })

    // user

  }

  loginWithoutAuth() {
    this.authService.logout();
    // console.log(this.authService.auth);
    this.router.navigate(['/heroes'])
  }
}
