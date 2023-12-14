import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Alerts', url: '/pages/Alerts', icon: 'alert-circle-outline'},
    { title: 'Alarms', url: '/pages/Alerts', icon: 'alarm-outline' },
    { title: 'Meters', url: '/pages/Alerts', icon: 'speedometer-outline' },
    { title: 'Products', url: '/pages/Products', icon: 'cart-outline' },
    { title: 'Services', url: '/pages/Products', icon: 'globe-outline' },
  ];

  // Inject AuthService and Router in the constructor
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    // Subscribe to the isAuthenticated$ observable
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        // User is authenticated, navigate to the main content or home page
        this.router.navigate(['/alerts']);
      } else {
        // If not authenticated, initiate the Auth0 login
        this.auth.loginWithRedirect();
      }
    });
  }

  // Add a method to handle the logout (if needed)

}
