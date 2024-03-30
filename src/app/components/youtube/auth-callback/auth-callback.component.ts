import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {
  isLoggedIn = false;
  userName = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to fragment changes
    this.route.fragment.subscribe((fragment: string | null) => {
      const params = new URLSearchParams(fragment!);
      const token = params.get('access_token');

      if (token) {
        sessionStorage.setItem('youtube_access_token', token);
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  logout(): void {
    // Clear the token from session storage
    sessionStorage.removeItem('youtube_access_token');
    this.isLoggedIn = false;
    this.router.navigate(['/youtube/login']); // You need to inject 'Router' in the constructor to use this
  }
}
