// sql.component.ts
import { Component, OnInit } from '@angular/core';
import { YourDataService } from '../../sql-server-test.service';

@Component({
  selector: 'app-your-component',
  templateUrl: './your-component.component.html',
  styleUrls: ['./your-component.component.css'],
})
export class YourComponent implements OnInit {
  data: any[] = []; // Initialize the property

  constructor(private dataService: YourDataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((result) => {
      this.data = result;
    });
  }
}
