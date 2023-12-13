import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meter-card',
  templateUrl: './meter-card.component.html',
  styleUrls: ['./meter-card.component.scss'],
})
export class MeterCardComponent  implements OnInit {



  //Control Variable
  @Input() hasAlert: Boolean;

  //Information Variable
  @Input() dateLastReadingDate:Date;
  @Input() strTenantName: string;
  @Input() strMeterNumber: string;
  @Input() strMeterType: string;
  @Input() numLastReading: number;
  @Input() numAveReading: number;
  @Input() numAlerts: number;
  //@Input() arrMeterReadings: number[];

  constructor() 
  {
    this.hasAlert = true;
    this.strTenantName="";
    this.strMeterNumber="";
    this.strMeterType="";
    this.numLastReading=0;
    this.numAveReading=0;
    this.dateLastReadingDate=new Date();
    this.numAlerts=0;
    // this.arrMeterReadings=[];
     }

  ngOnInit() {}

}
