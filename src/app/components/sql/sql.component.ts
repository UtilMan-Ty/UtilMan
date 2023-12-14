// sql.component.ts

import { Component, OnInit } from '@angular/core';
import { SqlService } from '../../services/sql.service';

@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.scss'],
})
export class SqlComponent implements OnInit {
  distinctMeterIds: string[] = [];

  constructor(private sqlService: SqlService) {}

  ngOnInit(): void {
    this.fetchAllMeterIds();
  }

  fetchAllMeterIds(): void {
    this.sqlService.getAllMeterIds().subscribe((data) => {
      this.distinctMeterIds = data;
    });
  }

  fetchDataLast24Hours(meterId: string): void {
    this.sqlService.fetchDataLast24Hours(meterId).subscribe((data) => {
      console.log('Data Last 24 Hours:', data);
      // Handle the data as needed
    });
  }

  // Add similar methods for other functionality
}
