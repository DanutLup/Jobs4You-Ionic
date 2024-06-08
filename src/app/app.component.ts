import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    const theme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('color-theme', theme);
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

  toggleTheme(event: any) {
    const theme = event.detail.checked ? 'dark' : 'light';
    document.body.setAttribute('color-theme', theme);
    localStorage.setItem('theme', theme);
  }
}
