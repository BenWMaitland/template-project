import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent {
  constructor(private readonly router: Router) {}

  clickLink() {
    this.router.navigate(['/page-two']);
  }
}
