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
    { title: 'Alerts', url: '/alerts', icon: 'alert-circle'},
    { title: 'Alarms', url: '/alarm', icon: 'alarm' },
    { title: 'Meters', url: '/meters', icon: 'speedometer' },
    //{ title: 'Products', url: '/Products', icon: 'cart-outline' },
    //{ title: 'Services', url: '/Products', icon: 'globe-outline' },
  ];

  // Inject AuthService and Router in the constructor
  constructor(private auth: AuthService, private router: Router) {}

  
  ngOnInit() {
    // Check if the user is coming from the /loader page
    const isComingFromLoader = this.router.url === '/loader';
  
    // Check if the user has already been redirected before
    const hasBeenRedirected = localStorage.getItem('hasBeenRedirected');
  
    // Subscribe to the isAuthenticated$ observable
    const authSubscription = this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        // Check if the user has not been redirected before and is not coming from /loader
        if (!hasBeenRedirected && !isComingFromLoader) {
          // Set the flag to indicate that the user has been redirected
          localStorage.setItem('hasBeenRedirected', 'true');
          
          // User is authenticated, navigate to the main content or home page
          //this.router.navigate(['/alerts']);
        }
  
        // Unsubscribe to prevent further actions
        authSubscription.unsubscribe();
      } else {
        // If not authenticated, initiate the Auth0 login
        this.auth.loginWithRedirect();
      }
    });
  }
  // Add a method to handle the logout (if needed)

}
