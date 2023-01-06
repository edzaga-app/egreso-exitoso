import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'utp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user!: string;
  password!: string;
  errorMessage!: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(user: string, password: string) {
    this.authService.login(user, password).subscribe((data) => {
      if (!data) return;
      this.navigateTo('');
    });
  }

  navigateTo(url?: string) {
    url = url || '';
    this.router.navigate([url], { replaceUrl: true });
  }
}
