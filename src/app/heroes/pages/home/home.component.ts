import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container {
      margin: 10px;
    }
  `
  ]
})
export class HomeComponent implements OnInit {

  get auth() {
    // console.log(this.usersService.user)
    return this.authService.auth 
  }
  
  constructor(private router: Router,
              private authService: AuthService) { }

  
  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    // backend
    // user

    this.router.navigate(['/auth'])
  }
}
