import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  darkMode: boolean = false;

  constructor() { }

  ngOnInit() {
    const storedTheme = localStorage.getItem('theme');
    this.darkMode = storedTheme === 'dark'; // Set darkMode based on stored theme
    document.body.setAttribute('color-theme', storedTheme || 'light'); // Set the initial theme
  }

  toggleTheme(event: any) {
    const theme = event.detail.checked ? 'dark' : 'light';
    document.body.setAttribute('color-theme', theme);
    localStorage.setItem('theme', theme);
  }

}
