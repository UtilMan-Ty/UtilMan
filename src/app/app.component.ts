import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Alerts', url: '/pages/Alerts', icon: 'alert-circle-outline'},
    { title: 'Alarms', url: '/pages/Alerts', icon: 'alarm-outline' },
    { title: 'Meters', url: '/pages/Alerts', icon: 'speedometer-outline' },
    { title: 'Products', url: '/pages/Products', icon: 'cart-outline' },
    { title: 'Services', url: '/pages/Products', icon: '<ion-icon name="globe"></ion-icon>-outline' },
  ];
  public labels = [];
  constructor() {}
}
