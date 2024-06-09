import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Apiresponse } from './apiresponse';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://jobicy.com/api/v2/remote-jobs';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Apiresponse>(this.baseUrl).pipe(
      map(response => response.jobs),
      catchError(error => {
        console.error('Error fetching jobs from API', error);
        // Fallback to local storage if API call fails
        const storedJobs = localStorage.getItem('jobs');
        if (storedJobs) {
          return of(JSON.parse(storedJobs));
        } else {
          return of([]);
        }
      })
    );
  }

  getJobDetailsById(id: number): Observable<Job | undefined> {
    return this.getJobs().pipe(
      map(jobs => jobs.find(job => job.id === id))
    );
  }
}
