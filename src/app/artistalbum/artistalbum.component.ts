import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-artistalbum',
  templateUrl: './artistalbum.component.html',
  styleUrls: ['./artistalbum.component.css']
})
export class ArtistalbumComponent {

 public albums: any[];

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      this.http
        .jsonp(
          `https://itunes.apple.com/lookup?id=${
            params["artistId"]
          }&entity=album`,
          "callback"
        )
        .toPromise()
        .then(res => {
          console.log(res);
          this.albums = res['results'].slice(1);
        });
    });
  }


}
