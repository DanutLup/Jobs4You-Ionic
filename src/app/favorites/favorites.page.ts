import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favoriteJobs: any[] = [];
  private favoritesSubscription!: Subscription; // Definite assignment assertion

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.loadFavorites();
    // Subscribe to changes in favorites
    this.favoritesSubscription = this.favoritesService.favoritesChanged.subscribe(() => {
      this.loadFavorites();
    });
  }

  ngOnDestroy() {
    // Unsubscribe from the subscription to avoid memory leaks
    if (this.favoritesSubscription) {
      this.favoritesSubscription.unsubscribe();
    }
  }

  loadFavorites() {
    this.favoriteJobs = this.favoritesService.getFavorites();
  }

  removeFromFavorites(jobId: number) {
    this.favoritesService.removeFromFavorites(jobId);
    // No need to manually refresh the list; it will be updated automatically
  }
}
