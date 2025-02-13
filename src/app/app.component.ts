import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}
  
  exit() {
    delete localStorage['token'];
    this.router.navigate(['/']);
  }

  auth(): boolean {
    return localStorage['token'];
  }
}
