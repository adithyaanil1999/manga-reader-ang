import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { scaperURL, BeURL, getsrcFromUrl } from '../../../../../global';
import { currentMangaDetails } from '../../../../store/actions/app.actions';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Location } from '@angular/common';

import {
  refreshMangaPage,
  refreshHomePage,
} from '../../../../store/actions/app.actions';

@Component({
  selector: 'app-manga-page',
  templateUrl: './manga-page.component.html',
  styleUrls: ['./manga-page.component.css'],
})
export class MangaPageComponent implements OnInit {
  sub;
  data;
  setSpinner: boolean = false;
  state: Object;
  substate: boolean = false;
  lastRead: string = '';
  lastChapLink: string = '';
  lastChapTitle: string = '';
  isBookmarked: string = '';
  lastIndex: number = 0;
  link: string = '';
  getSourceFromUrl = getsrcFromUrl;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  getLastChapLink(link, title) {
    this.lastChapLink = link;
    this.lastChapTitle = title;
  }

  findIndexLast() {
    for (var i = 0; i < this.data.chapterList.length; i++) {
      if (this.data.chapterList[i].chapterTitle == this.lastRead) {
        this.lastIndex = i;
        break;
      }
    }
  }

  handleLink(link, title) {
    this.setSpinner = true;
    let data = {
      username: this.state['userDetailObject']['username'],
      src: this.getSourceFromUrl(),
      mangaTitle: this.data.title.replace("'", "''"),
      chapTitle: title.replace("'", "''"),
    };
    fetch(BeURL + 'updateHistory', {
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
        if (data.message === 'sucesss') {
          this.setSpinner = false;
          this.store.dispatch(refreshHomePage({ refreshHomePageBool: true }));
          this.router.navigate(['chapViewer'], { queryParams: { link: link } });
        } else {
          console.log(data.message);
          alert('Some error has occured');
          this.location.back();
        }
      });
  }

  handleLastRead() {
    this.handleLink(this.lastChapLink, this.lastChapTitle);
  }

  highlightLastRead() {
    this.setSpinner = true;
    let dataSent = {
      username: this.state['userDetailObject']['username'],
      src: this.getSourceFromUrl(),
      mangaTitle: this.data.title.replace("'", "''"),
    };
    fetch(BeURL + 'getLastReadChapter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(dataSent),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setSpinner = false;
        this.lastRead = data.message;
        this.isBookmarked = data.messageBookmarked;
        this.findIndexLast();
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

  handleBookmark() {
    this.setSpinner = true;
    let data = {
      username: this.state['userDetailObject']['username'],
      src: this.getSourceFromUrl(),
      mangaTitle: this.data.title.replace("'", "''"),
      mangaLink: this.link,
      thumbLink: this.data.thumb,
      chapTitle: this.lastChapTitle.replace("'", "''"),
      latestTitle: this.data.chapterList[0].chapterTitle.replace("'", "''"),
    };

    // console.log(data);
    // this.setSpinner = true;

    fetch(BeURL + 'addBookmark', {
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
        if (data.message === 'success') {
          this.setSpinner = false;
          this.store.dispatch(refreshHomePage({ refreshHomePageBool: true }));
          if (this.isBookmarked === 'YES') {
            this.isBookmarked = 'NO';
          } else {
            this.isBookmarked = 'YES';
          }
        } else {
          alert('Some error has occured');
          location.reload();
        }
      });
  }

  getMangaDetails(link) {
    this.setSpinner = true;
    fetch(scaperURL + 'getMangaInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ url: link }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.data = data.mangaInfo;
        this.setSpinner = false;
        if (this.data.chapterList.length === 0) {
          alert('This content is removed,try a different source');
          this.location.back();
        }
        this.store.dispatch(
          currentMangaDetails({ mangaDetails: { ...this.data } })
        );
        this.setSpinner = false;
        this.highlightLastRead();
        if (this.data.desc.indexOf(':') !== -1) {
          this.data.desc = this.data.desc.split(':')[1];
        }
      });
  }
  ngOnInit(): void {
    this.setSpinner = true;
    this.state = this.getState();
    this.sub = this.route.queryParams.subscribe((params) => {
      this.link = params.link;
    });

    if (this.state['refreshMangaPageBool'] === true) {
      this.store.dispatch(refreshMangaPage({ refreshMangaPage: false }));
      this.substate = true;
      this.getMangaDetails(this.link);
    } else {
      this.setSpinner = true;
      console.log(this.setSpinner);
      if (this.state['mangaObject']) {
        let dataSent = {
          username: this.state['userDetailObject']['username'],
          src: this.getSourceFromUrl(),
          mangaTitle: this.state['mangaObject']['title'].replace("'", "''"),
        };
        fetch(BeURL + 'getLastReadChapter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify(dataSent),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            this.setSpinner = false;
            this.lastRead = data.message;
            this.isBookmarked = data.messageBookmarked;
            this.findIndexLast();
          });
        this.data = this.state['mangaObject'];
      } else {
        this.getMangaDetails(this.link);
      }
    }
  }

  ngOnDestroy() {
    if (this.substate) {
      this.sub.unsubscribe();
    }
  }
}
