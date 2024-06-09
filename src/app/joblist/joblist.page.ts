import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Apiresponse } from '../apiresponse';
import { Job } from '../job';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.page.html',
  styleUrls: ['./joblist.page.scss'],
})
export class JoblistPage implements OnInit {

  constructor(private router: Router, private api: ApiService) { }

  jobs: Job[] = [];
  apiResponse?: Apiresponse;

  ngOnInit() {
    // Fetch jobs from API
    this.api.getJobs().subscribe(
      (jobs: Job[]) => {
        this.jobs = jobs;
        // Store jobs in localStorage
        localStorage.setItem('jobs', JSON.stringify(jobs));
      },
      (error) => {
        console.error('Failed to fetch jobs from API', error);
        // If API request fails, load jobs from localStorage
        const storedJobs = localStorage.getItem('jobs');
        if (storedJobs) {
          this.jobs = JSON.parse(storedJobs);
        }
      }
    );
  }

}
