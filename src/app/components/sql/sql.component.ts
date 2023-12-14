// sql.component.ts
import { Component, OnInit } from '@angular/core';
import { YourDataService } from '../../api.service';

@Component({
  selector: 'app-your-component',
  templateUrl: './your-component.component.html',
  styleUrls: ['./your-component.component.scss'],
})
export class YourComponent implements OnInit {
  data: any[] = [];
  distinctMeterIds: any[] = [];

  constructor(private dataService: YourDataService) {}

  ngOnInit(): void {
    this.loadData();
    this.loadDistinctMeterIds();
  }

  loadData(): void {
    this.dataService.getData().subscribe(
      (result) => {
        this.data = result;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  loadDistinctMeterIds(): void {
    this.dataService.getDistinctMeterIds().subscribe(
      (result) => {
        this.distinctMeterIds = result;
      },
      (error) => {
        console.error('Error fetching distinct meter IDs:', error);
      }
    );
  }

  // Add methods to load data for other endpoints as needed
}
