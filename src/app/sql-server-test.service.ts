// sql-server-test.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YourDataService {
  private apiUrl = 'http://localhost:3000/api/data'; // Update with your API URL

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
