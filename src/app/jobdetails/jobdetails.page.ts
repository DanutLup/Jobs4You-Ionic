import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../job';
import { FavoritesService } from '../favorites.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.page.html',
  styleUrls: ['./jobdetails.page.scss'],
})
export class JobdetailsPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private favoritesService: FavoritesService
  ) {}

  id?: number;
  job?: Job;
  isFavorite?: boolean;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id']; // Convert id to number
      if (this.id) {
        this.fetchJobDetails();
        this.isFavorite = this.favoritesService.isFavorite(this.id); // Check if the job is in favorites
      }
    });
  }

  fetchJobDetails() {
    this.api.getJobDetailsById(this.id!).subscribe(
      job => {
        if (job) {
          this.job = job;
        } else {
          // If job not found in API, fetch from local storage
          this.loadJobDetailsFromLocalStorage(this.id!);
        }
      },
      error => {
        console.error('Error fetching job details:', error);
        // On error, fetch from local storage
        this.loadJobDetailsFromLocalStorage(this.id!);
      }
    );
  }

  loadJobDetailsFromLocalStorage(id: number) {
    const storedJobs = localStorage.getItem('jobs');
    if (storedJobs) {
      const jobs: Job[] = JSON.parse(storedJobs);
      this.job = jobs.find(job => job.id === id);
    }
  }

  toggleFavorites() {
    if (this.job) {
      if (this.isFavorite) {
        this.favoritesService.removeFromFavorites(this.id!);
      } else {
        this.favoritesService.addToFavorites(this.job);
      }
      this.isFavorite = !this.isFavorite; // Toggle the isFavorite flag
    }
  }
}
