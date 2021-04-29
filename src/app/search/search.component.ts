import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

 public loading: boolean = false;
  apiRoot: string = "https://itunes.apple.com/search";
  results: SearchItem[];
  constructor(
    private route: ActivatedRoute,
    private router: Router, private http: HttpClient
  ) {
        this.results = [];
    this.route.params.subscribe(params => {
      console.log(params);
      if (params["term"]) {
        this.doSearch(params["term"]);
      }
    });
  }

  doSearch(term: string) {
    this.loading = true;
    this.search(term).then(_ => (this.loading = false));
  }

  onSearch(term: string) {
    this.router.navigate(["search", { term: term }]);
  }

  canDeactivate() {
    return this.results.length > 0;
  }


  search(term: string) {
    return new Promise((resolve, reject) => {
      this.results = [];
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http
        .jsonp(apiURL, "callback")
        .toPromise()
        .then(
          res => {
            // Success
            console.log(res,'res');

            this.results = res['results'].map(item => {
              return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
              );
            });
            resolve(res);
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
  }

}

export class SearchItem {
    constructor(
        public name: string,
        public artist: string,
        public link: string,
        public thumbnail: string,
        public artistId: string
      ) {}
}
