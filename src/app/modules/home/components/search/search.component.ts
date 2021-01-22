import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { scaperURL, getSourceFromCode } from '../../../../../global';
import {
  currentMangaLink,
  refreshMangaPage,
} from '../../../../store/actions/app.actions';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  sub;
  getParams;
  data;
  state;
  setSpinner: boolean = false;
  maxItems = 1;
  extendSearch: boolean = false;
  getSrc = getSourceFromCode;

  getState() {
    let state;
    this.store
      .select((state) => state)
      .pipe(take(1))
      .subscribe((s) => {
        state = s;
      });
    return state.reducer;
  }

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private _router: Router
  ) {}

  handleExtend() {
    this.extendSearch = true;
    this.maxItems = 20;
    this.getResults();
  }

  getResults() {
    this.setSpinner = true;
    fetch(scaperURL + 'search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        type: this.getParams.type,
        title: this.getParams.title,
        maxItems: this.maxItems,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setSpinner = false;
        this.data = data.searchArray;
      });
  }

  handleMangaClick(link) {
    this.store.dispatch(currentMangaLink({ currentMangaLink: link }));
    this.store.dispatch(refreshMangaPage({ refreshMangaPage: true }));
    this._router.navigate(['dashboard/mangaView'], {
      queryParams: { link: link },
    });
  }

  ngOnInit(): void {
    this.state = this.getState();
    this.sub = this.route.queryParams.subscribe((params) => {
      this.getParams = params;
      this.getResults();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
