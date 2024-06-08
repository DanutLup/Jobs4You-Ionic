import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Apiresponse } from './apiresponse';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService{
  private localStorageKey = 'favorites';
  favoritesChanged = new EventEmitter<void>(); // Event emitter for favorites changes

  constructor() {}

  getFavorites(): any[] {
    const favorites = localStorage.getItem(this.localStorageKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  addToFavorites(job: any): void {
    const favorites = this.getFavorites();
    if (!favorites.find(fav => fav.id === job.id)) {
      favorites.push(job);
      localStorage.setItem(this.localStorageKey, JSON.stringify(favorites));
      this.favoritesChanged.emit(); // Emit event after adding to favorites
    }
  }

  removeFromFavorites(jobId: number): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(job => job.id !== jobId);
    localStorage.setItem(this.localStorageKey, JSON.stringify(favorites));
    this.favoritesChanged.emit(); // Emit event after removing from favorites
  }

  isFavorite(jobId: number): boolean {
    const favorites = this.getFavorites();
    return !!favorites.find(job => job.id === jobId);
  }
}
