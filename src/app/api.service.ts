// your-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YourDataService {
  private apiUrl = 'http://localhost:3000/api'; // Update this with your server's base URL

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/data`);
  }

  getDistinctMeterIds(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/distinctMeterIds`);
  }

  getDataLast24Hours(meterId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/dataLast24Hours/${meterId}`);
  }

  // Add similar methods for other endpoints as needed
}
