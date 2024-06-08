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

  jobs: Job[] = []
  apiResponse?: Apiresponse

  ngOnInit() {
    this.api.getJobs().subscribe((jobs: Job[]) => {
      this.jobs = jobs;
    });  }

}
