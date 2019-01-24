import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getReviews(): Observable<any> {
    return this.http.get('./assets/data.json').pipe(
      map(apiResponse => {
        if (!apiResponse) {
          return null;
        }
        return apiResponse;
      })
    );
  }
}
