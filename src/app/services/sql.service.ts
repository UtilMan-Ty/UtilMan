// sql.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SqlService {
  private baseUrl = 'http://localhost:3000/api'; // Replace with your server URL

  constructor(private http: HttpClient) {}

  getAllMeterIds(): Observable<any> {
    return this.http.get(`${this.baseUrl}/distinctMeterIds`);
  }

  fetchDataLast24Hours(meterId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/dataLast24Hours/${meterId}`);
  }

  // Add methods for other endpoints
}
