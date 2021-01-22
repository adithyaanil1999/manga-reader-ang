import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Cookies from 'js-cookie';
import { Store } from '@ngrx/store';
import { Router, NavigationEnd } from '@angular/router';

import {
  checklogin,
  currentSource,
  refreshGenrePage,
  refreshHomePage,
} from '../../../../store/actions/app.actions';
import { scaperURL, BeURL } from '../../../../../global';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isDiscover: boolean = false;
  isHome: boolean = false;
  isGenre: boolean = false;
  isAccount: boolean = false;
  mode: string = 'manga';
  focusBool: boolean = false;
  data = [];
  setSpin = false;
  @ViewChild('searchInp') searchInp: ElementRef;
  @ViewChild('dashbodywrap') dashbody: ElementRef;

  constructor(private _router: Router, private store: Store) {}

  selectItem(index) {
    if (index === 0) {
      this.isDiscover = true;
      this.isHome = false;
      this.isGenre = false;
      this.isAccount = false;
    } else if (index === 1) {
      this.isDiscover = false;
      this.isHome = true;
      this.isGenre = false;
      this.isAccount = false;
    } else if (index === 2) {
      this.isDiscover = false;
      this.isHome = false;
      this.isGenre = true;
      this.isAccount = false;
    } else {
      this.isDiscover = false;
      this.isHome = false;
      this.isGenre = false;
      this.isAccount = true;
    }
  }

  getAutoCompleteResults() {
    let title = this.searchInp.nativeElement.value;
    if (title.length >= 2) {
      if (this.mode === 'manga') {
        fetch(scaperURL + 'autocomplete', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify({
            type: 'manga',
            title: title,
          }),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            this.data = data.message;
            // console.log(this.data);
          });
      } else {
        fetch(scaperURL + 'autocomplete', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify({
            type: 'comic',
            title: title,
          }),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            data = data.comicSuggest;
            let dataArr = [];
            for (let i = 0; i < data.length; i++) {
              dataArr.push({
                name: data[i],
              });
            }
            this.data = dataArr;
          });
      }
    }
  }

  toggleType(type) {
    if (type === 'comic') {
      this.mode = 'comic';
    } else {
      this.mode = 'manga';
    }
  }

  handleSearchRedirect(e, name) {
    // console.log(e.keyCode)
    if (e === null) {
      this.isNotFocused();
      this._router.navigate(['dashboard/search'], {
        queryParams: { type: this.mode, title: name },
      });
    } else if (e.keyCode === 13 && name !== '') {
      this.isNotFocused();
      this._router.navigate(['dashboard/search'], {
        queryParams: { type: this.mode, title: name },
      });
    }
  }

  isFocused() {
    this.focusBool = true;
  }

  isNotFocused() {
    setTimeout(() => {
      this.focusBool = false;
      this.searchInp.nativeElement.value = '';
      this.data = [];
    }, 150);
  }

  selectButton() {
    let currentUrl = window.location.href;
    if (
      currentUrl.indexOf('discover') !== -1 ||
      currentUrl.indexOf('mangaView') !== -1 ||
      currentUrl.indexOf('chapViewer') !== -1
    ) {
      this.selectItem(0);
    } else if (currentUrl.indexOf('home') !== -1) {
      this.selectItem(1);
    } else if (currentUrl.indexOf('genre') !== -1) {
      this.selectItem(2);
    } else if (currentUrl.indexOf('account') !== -1) {
      this.selectItem(3);
    } else if (
      currentUrl.indexOf('login') !== -1 ||
      currentUrl.indexOf('search?') !== -1
    ) {
      //skip
    } else {
      this._router.navigate(['/dashboard/discover'], {
        queryParams: { type: 'latest' },
      });
      this.selectItem(0);
    }
  }

  getSourceFromDb() {
    this.setSpin = true;
    fetch(BeURL + 'getDefaultSrc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        username: Cookies.get('username'),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setSpin = false;
        this.store.dispatch(currentSource({ currentSource: data.message.src }));
        this.store.dispatch(refreshHomePage({ refreshHomePageBool: true }));
        this.store.dispatch(refreshGenrePage({ refreshGenrePageBool: true }));
      });
  }

  ngAfterViewInit() {
    this.dashbody.nativeElement.addEventListener('touchmove', function (event) {
      event.preventDefault();
      return false;
    });
  }
  ngOnInit(): void {
    let username = Cookies.get('username');
    if (username == '' || username == undefined) {
      this._router.navigate(['login']);
    } else {
      this.store.dispatch(checklogin({ isLoggedIn: true }));
      this.getSourceFromDb();
    }

    this._router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.selectButton();
      }
    });

    this.selectButton();
  }
}
