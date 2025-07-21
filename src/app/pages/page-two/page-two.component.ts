import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent {
  constructor(private readonly router: Router) {}

  clickLink() {
    this.router.navigate(['/page-one']);
  }
}
