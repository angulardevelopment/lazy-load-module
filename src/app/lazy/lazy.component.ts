import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {

  public value = 'default';

  constructor(private route: ActivatedRoute) {
    console.log('lazy constructor');
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { value: string }) => {
        console.log('lazy value set');
        this.value = data.value;
    });
}
}
