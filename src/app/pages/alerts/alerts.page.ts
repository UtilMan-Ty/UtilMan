import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  parseDateString(dateString: string): Date {
    return new Date(dateString);
  }
}
