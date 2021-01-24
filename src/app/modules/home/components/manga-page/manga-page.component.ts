import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  scaperURL,
  BeURL,
  getsrcFromUrl,
  prodBool,
  getSourceFromCode,
} from '../../../../../global';
import { currentMangaDetails } from '../../../../store/actions/app.actions';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Location } from '@angular/common';
import Cookies from 'js-cookie';

// import MangaHere from '../../../models/MangaHere';

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
  lastReadIndex: number = 0;
  lastChapLink: string = '';
  lastChapTitle: string = '';
  isBookmarked: string = '';
  lastIndex: number = 0;
  link: string = '';
  viewerType;
  srcObj = {};
  getSourceFromUrl = getsrcFromUrl;
  getsrcFromCode = getSourceFromCode;

  constructor(
    // private mangaHereObj: MangaHere,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  getLastChapLink(link, title) {
    this.lastChapLink = link;
    this.lastChapTitle = title;
  }

  // findIndexLast() {
  //   for (var i = 0; i < this.data.chapterList.length; i++) {
  //     if (this.data.chapterList[i].chapterTitle == this.lastRead) {
  //       this.lastIndex = i;
  //       break;
  //     }
  //   }
  // }

  handleLink(link, title) {
    this.setSpinner = true;
    let data = {
      username: this.state['userDetailObject']['username'],
      src: this.getSourceFromUrl(this.state['srcOBJ']),
      mangaTitle: this.data.title.replace("'", "''"),
      chapTitle: title.replace("'", "''"),
      chapIndex: this.getChapIndex(title.replace("'", "''")),
    };
    // console.log(data);
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
          this.router.navigate(['chapViewer'], {
            queryParams: {
              link: link,
            },
          });
        } else {
          // console.log(data.message);
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
      src: this.getSourceFromUrl(this.state['srcOBJ']),
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
        // console.log(data.message);
        this.lastReadIndex = this.data.chapterList.length - data.message - 1;
        if (this.lastReadIndex < 0) {
          this.lastReadIndex = Math.abs(this.lastReadIndex);
        }
        // console.log(this.lastReadIndex);
        // console.log(this.data.chapterList[this.lastReadIndex].chapterTitle);
        this.isBookmarked = data.messageBookmarked;
        // this.findIndexLast();
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
  getChapIndex(title) {
    let lastReadIndex = 0;
    for (let j of this.data.chapterList) {
      if (title === j.chapterTitle) {
        return this.data.chapterList.length - lastReadIndex - 1;
      } else {
        lastReadIndex++;
        continue;
      }
    }
  }
  handleBookmark() {
    this.setSpinner = true;
    let data = {
      username: this.state['userDetailObject']['username'],
      src: this.getSourceFromUrl(this.state['srcOBJ']),
      mangaTitle: this.data.title.replace("'", "''"),
      mangaLink: this.link,
      thumbLink: this.data.thumb,
      chapTitle: this.lastChapTitle.replace("'", "''"),
      chapIndex: this.getChapIndex(this.lastChapTitle.replace("'", "''")),
      latestTitle: this.data.chapterList[0].chapterTitle.replace("'", "''"),
      latestIndex: this.data.chapterList.length,
    };

    // console.log(data);

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

  // testLocal() {
  //   // console.log(this.data);
  //   // console.log(th)
  //   let testChap = this.data.chapterList[0].chapterLink;
  //   console.log(testChap);
  //   const mangaHereObj = new MangaHere();
  //   mangaHereObj.getImageList(testChap).then((data) => {
  //     console.log(data);
  //   });
  // }

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
        // this.testLocal();
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

  setViewerType() {
    if (Cookies.get('viewerType') === undefined) {
      if (prodBool) {
        Cookies.set('viewerType', 'vertical', {
          expires: 365,
          domain: 'localhost',
        });
      } else {
        Cookies.set('viewerType', 'vertical', {
          expires: 365,
          domain: 'adithyaanil1999.github.io',
        });
      }
      this.viewerType = 'vertical';
    } else {
      this.viewerType = Cookies.get('viewerType');
    }
  }

  toggleTypeTo(type) {
    this.viewerType = type;
    if (prodBool) {
      Cookies.set('viewerType', type, { expires: 365, domain: 'localhost' });
    } else {
      Cookies.set('viewerType', type, {
        expires: 365,
        domain: 'adithyaanil1999.github.io',
      });
    }
  }

  ngAfterViewInit() {
    // this.srcObj = this.state['srcOBJ'];
    // console.log(this.srcObj);
  }

  ngOnInit(): void {
    this.setSpinner = true;
    this.setViewerType();
    this.state = this.getState();
    this.srcObj = this.state['srcOBJ'];
    this.sub = this.route.queryParams.subscribe((params) => {
      this.link = params.link;
    });

    if (this.state['refreshMangaPageBool'] === true) {
      this.store.dispatch(refreshMangaPage({ refreshMangaPage: false }));
      this.substate = true;
      this.getMangaDetails(this.link);
    } else {
      this.setSpinner = true;
      // console.log(this.setSpinner);
      if (this.state['mangaObject']) {
        let dataSent = {
          username: this.state['userDetailObject']['username'],
          src: this.getSourceFromUrl(this.state['srcOBJ']),
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
            this.lastReadIndex =
              this.data.chapterList.length - data.message - 1;
            if (this.lastReadIndex < 0) {
              this.lastReadIndex = Math.abs(this.lastReadIndex);
            }
            this.isBookmarked = data.messageBookmarked;
            // this.findIndexLast();
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
