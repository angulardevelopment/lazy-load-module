import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    imports: [RouterLink, RouterLinkActive]
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

 goHome() {
    this.router.navigate(["hi"]);
  }

  goSearch() {
    this.router.navigate(["search"]);
  }
}