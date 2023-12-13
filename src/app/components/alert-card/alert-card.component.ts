import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-card',
  templateUrl: './alert-card.component.html',
  styleUrls: ['./alert-card.component.scss'],
})
export class AlertCardComponent  implements OnInit {
  
  @Input() strAlarmName: string;
  @Input() dateTimeTriggered: Date;
  @Input() strAlarmDescription: string;
  
  constructor() { 
    this.strAlarmName = "";
    this.dateTimeTriggered = new Date();
    this.strAlarmDescription = "";
  }

  ngOnInit() {}

}
