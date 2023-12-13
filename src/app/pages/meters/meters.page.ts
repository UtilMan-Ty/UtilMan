import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meters',
  templateUrl: './meters.page.html',
  styleUrls: ['./meters.page.scss'],
})
export class MetersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  parseDateString(dateString: string): Date {
    return new Date(dateString);
  }
}