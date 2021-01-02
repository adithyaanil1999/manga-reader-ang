import { Component, OnInit, ViewChild } from '@angular/core';
import { getSourceFromCode, scaperURL } from '../../../../../global';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

import {
  prevScrollHeight,
  currentMangaLink,
  latestMangaList,
  refreshMangaPage,
  pageNoObject,
  refreshHomePage,
  genreMangaList,
  refreshGenreListPage,
} from '../../../../store/actions/app.actions';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
})
export class DiscoverComponent implements OnInit {
  sub;
  statesub;
  src: string = '';
  dataArr = [];
  pageNo: number = 1;
  pageNoGenre: number = 1;
  state: {};
  setSpinner: boolean = false;
  end: boolean = false;
  params;
  mode: string = '';
  getsrc = getSourceFromCode;

  @ViewChild('scrollCont') scrollCont: any;

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private store: Store
  ) {}

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

  getGenreManga() {
    this.setSpinner = true;
    fetch(scaperURL + 'genreManga', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        src: this.src,
        link: this.params.genre,
        page: this.pageNoGenre,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.LatestManga === 'end') {
          this.setSpinner = false;
          this.end = true;
          // console.log('end');
        } else {
          this.setSpinner = false;
          this.dataArr = this.dataArr.concat(data.LatestManga);
          this.store.dispatch(genreMangaList({ genreList: this.dataArr }));
          this.pageNoGenre += 1;
        }
      });
  }

  getHotManga(pageNo) {
    this.setSpinner = true;
    // console.log(this.src);
    let data = {
      src: this.src,
      page: pageNo,
    };
    fetch(scaperURL + 'getMangaList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setSpinner = false;
        this.dataArr = this.dataArr.concat(data.LatestManga);
        this.store.dispatch(latestMangaList({ latestList: this.dataArr }));
        this.pageNo += 1;
        this.store.dispatch(
          pageNoObject({ pageNoObj: { discover: this.pageNo } })
        );
      });
  }

  handleScroll() {
    if (this.end === false) {
      const element = this.scrollCont.nativeElement;
      // console.log(element.scrollTop);
      this.store.dispatch(
        prevScrollHeight({ prevScrollHeight: element.scrollTop })
      );

      if (
        Math.ceil(element.scrollHeight - element.scrollTop) ===
        element.clientHeight
      ) {
        if (this.mode === 'latest') {
          this.getHotManga(this.pageNo);
        } else {
          this.getGenreManga();
        }
      }
    }
  }

  handleMangaClick(link) {
    link = link.link;
    this.store.dispatch(currentMangaLink({ currentMangaLink: link }));
    this.store.dispatch(refreshMangaPage({ refreshMangaPage: true }));
    this._router.navigate(['dashboard/mangaView'], {
      queryParams: { link: link },
    });
  }

  scrollTo(top) {
    this.setSpinner = true;
    setTimeout(() => {
      const element = this.scrollCont.nativeElement;
      element.scrollTo({
        top: top,
        behavior: 'smooth',
      });
      this.setSpinner = false;
    }, 500);
  }

  initPage() {
    if ('type' in this.params) {
      this.mode = 'latest';
      this.end = false;
      this.dataArr = [];
      if (
        Object.keys(this.state['latestObject']).length === 0 ||
        this.state['refreshHomePageBool'] === true
      ) {
        // console.log('getting list from api');
        this.store.dispatch(refreshHomePage({ refreshHomePageBool: false }));
        this.getHotManga(this.pageNo);
      } else {
        // console.log('getting data from nrgx');
        this.pageNo = this.state['pageNoObject']['discover'];
        this.dataArr = this.state['latestObject'];
        this.scrollTo(this.state['prevScrollHeight']);
      }
    } else if ('genre' in this.params) {
      this.mode = 'genre';
      this.dataArr = [];
      if (
        Object.keys(this.state['genreMangaObject']).length === 0 ||
        this.state['refreshGenreListBool'] === true
      ) {
        this.store.dispatch(
          refreshGenreListPage({ refreshGenreListBool: false })
        );
        this.getGenreManga();
      } else {
        this.dataArr = this.state['genreMangaObject'];
        this.scrollTo(this.state['prevScrollHeight']);
      }
    }
  }

  ngOnInit(): void {
    this.src = '';
    this.sub = this.route.queryParams.subscribe((params) => {
      this.params = params;
      this.statesub = this.store
        .select((state) => state['reducer']['currentSource'])
        .subscribe((currentSource) => {
          if (currentSource !== '') {
            this.state = this.getState();
            this.src = currentSource;
            this.initPage();
          }
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.statesub.unsubscribe();
  }
}
