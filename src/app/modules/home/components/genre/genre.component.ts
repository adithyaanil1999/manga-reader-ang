import { Component, OnInit } from '@angular/core';
import { scaperURL } from '../../../../../global';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

import {
  genreObject,
  refreshGenrePage,
  refreshGenreListPage,
  homeScrollHeight
} from '../../../../store/actions/app.actions';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
})
export class GenreComponent implements OnInit {
  constructor(private _router: Router, private store: Store) {}
  data;
  state;
  statesub;
  src: string = '';
  setSpinner: boolean = false;

  handleTag(link) {
    this.store.dispatch(refreshGenreListPage({ refreshGenreListBool: true }));
    this._router.navigate(['dashboard/discover'], {
      queryParams: { genre: link },
    });
  }

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

  getGenreList() {
    this.setSpinner = true;
    fetch(scaperURL + 'getGenres', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        src: this.src,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.data = data.genreList;
        this.store.dispatch(genreObject({ genreObj: this.data }));
        this.setSpinner = false;
      });
  }
  initPage() {
    this.state = this.getState();
    this.store.dispatch(
      homeScrollHeight({ homeScrollHeight: 0 })
    );
    if (
      Object.keys(this.state['genreObj']).length === 0 ||
      this.state['refreshGenrePageBool'] === true
    ) {
      // console.log('getting tags from api')
      this.store.dispatch(refreshGenrePage({ refreshGenrePageBool: false }));
      this.getGenreList();
    } else {
      // console.log('getting tags from ngrx')
      this.data = this.state['genreObj'];
    }
  }
  ngOnInit(): void {
    this.state = this.getState();
    this.statesub = this.store
      .select((state) => state['reducer']['currentSource'])
      .subscribe((currentSource) => {
        if (currentSource !== '') {
          this.src = currentSource;
          this.initPage();
        }
      });
  }

  ngOnDestroy() {
    this.statesub.unsubscribe();
  }
}
