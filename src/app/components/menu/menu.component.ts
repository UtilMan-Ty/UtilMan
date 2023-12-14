// menu.component.ts
import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
  })
  export class AppMenuComponent implements OnInit {
    @Input() menuItems: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
