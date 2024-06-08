import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apiresponse } from './apiresponse';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://jobicy.com/api/v2/';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Apiresponse>(this.baseUrl + "remote-jobs").pipe(
      map(response => response.jobs)
    );
  }

  getJobDetailsById(id: number): Observable<Job | undefined> {
    return this.getJobs().pipe(
      map(jobs => jobs.find(job => job.id === id))
    );
  }
}
