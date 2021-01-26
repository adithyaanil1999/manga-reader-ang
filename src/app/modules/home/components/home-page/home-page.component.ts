import { Component, OnInit,ViewChild } from '@angular/core';
import { BeURL, getSourceFromCode } from '../../../../../global';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import {
  currentMangaLink,
  refreshMangaPage,
  bookmarkedList,
  refreshHomePage,
  homeScrollHeight
} from '../../../../store/actions/app.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  state;
  setSpinner: boolean = false;
  showNoBookmarks: boolean = false;
  dataArr = [];
  data = [];
  unreadArr = [];
  readArr = [];
  srcObj = {};
  dataOrg;
  @ViewChild('scrollCont') scrollCont: any;
  getSourceFromCode = getSourceFromCode;

  constructor(private store: Store, private _router: Router) {}

  returnAbs(num) {
    return Math.abs(num);
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
  handleScroll() {
    const element = this.scrollCont.nativeElement;
    this.store.dispatch(
      homeScrollHeight({ homeScrollHeight: element.scrollTop })
    );
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

  handleHomePageSearch(e, title) {
    if (title === '') {
      this.data = this.dataOrg;
      this.splitData();
    } else {
      let tempData = [];
      // console.log(this.dataOrg);
      for (let i of this.dataOrg) {
        // console.log(i.manga_title);
        if (i.manga_title.toLowerCase().includes(title)) {
          tempData.push(i);
        }
      }
      this.data = tempData;
      this.splitData();
    }
  }
  handleMangaClick(link) {
    this.store.dispatch(currentMangaLink({ currentMangaLink: link }));
    this.store.dispatch(refreshMangaPage({ refreshMangaPage: true }));
    this._router.navigate(['dashboard/mangaView'], {
      queryParams: { link: link },
    });
  }

  mergeDataArrays(arr1, arr2) {
    function returnIndexOfMangaFromArr2(chapterTitle) {
      for (let i = 0; i < arr2.length; i++) {
        if (arr2[i].manga_title === chapterTitle) {
          return i;
        }
      }
    }
    let indexOfMangaFromArr2 = 0;
    for (let i = 0; i < arr1.length; i++) {
      indexOfMangaFromArr2 = returnIndexOfMangaFromArr2(arr1[i].manga_title);
      this.data.push({ ...arr1[i], ...arr2[indexOfMangaFromArr2] });
    }
    this.dataOrg = this.data;
    this.store.dispatch(bookmarkedList({ bookMarkedList: this.data }));
    this.splitData();
  }

  splitData() {
    this.unreadArr = [];
    this.readArr = [];
    let diff = 0;
    let unreadIndex = 0;
    for (let i = 0; i < this.data.length; i++) {
      diff = this.data[i].latest_chapter_index - this.data[i].last_read_index - 1
      if ( diff > 0 ) {
        this.unreadArr.push(this.data[i]);
        this.unreadArr[unreadIndex] = {...this.unreadArr[unreadIndex],diff:diff}
        unreadIndex++;
      } else {
        this.readArr.push(this.data[i]);
      }
      if(i === this.data.length-1){
        this.setSpinner = false;
      }
    }
    this.unreadArr = this.unreadArr.sort((a, b) => a.diff - b.diff)
  }

  getAllBookmarked() {
    fetch(BeURL + 'getBookmarked', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        username: this.state['userDetailObject']['username'],
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.message !== 0) {
          this.dataArr = data.message;
          fetch(BeURL + 'getBookmarkedInfo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
              userIndex: this.dataArr,
            }),
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              this.mergeDataArrays(this.dataArr, data.message);
            });
        } else {
          this.showNoBookmarks = true;
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  ngOnInit(): void {
    this.setSpinner = true;
    this.state = this.getState();
    this.srcObj = this.state['srcOBJ'];
    if (
      Object.keys(this.state['bookMarkedObj']).length === 0 ||
      this.state['refreshHomePageBool'] === true
    ) {
      this.store.dispatch(refreshHomePage({ refreshHomePageBool: false }));
      this.getAllBookmarked();
    } else {
      this.data = this.state['bookMarkedObj'];
      this.scrollTo(this.state['homeScrollHeight']);
      this.dataOrg = this.data;
      this.splitData();
    }
  }
}
