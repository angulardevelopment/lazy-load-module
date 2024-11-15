import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent {

  public tracks: any[];

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      this.http
        .jsonp(
          `https://itunes.apple.com/lookup?id=${
            params["artistId"]
          }&entity=song`,
          "callback"
        )
        .toPromise()
        .then(res => {
          console.log(res);
          this.tracks = res['results'].slice(1);
        });
    });
   }

}


app.module.ts
import {HttpClientJsonpModule } from '@angular/common/http';

imports: [
HttpClientJsonpModule ,
]

app.component.ts
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) { }

// Pass the key for your callback (in this case 'callback') as the second argument to the Jsonp method
getjsonprequest(){
let url2 = 'https://jobs.github.com/positions.json?description=python&location=new+york&callback=JSONP_CALLBACK';
return this.http.jsonp(url2, 'callback');
}

getjsonprequest2(){
const url = "https://archive.org/index.php?output=json&callback=archive";
return this.http.jsonp(url, 'JSONP_CALLBACK');
}

fetchdata() {
this.getjsonprequest().subscribe(res => {
console.log(res, 'r');
})
}