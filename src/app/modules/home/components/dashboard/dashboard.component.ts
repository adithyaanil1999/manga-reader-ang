import { Component, OnInit} from '@angular/core';
import Cookies from 'js-cookie';
import { Store} from '@ngrx/store';
import { Router } from '@angular/router';

import { checklogin } from '../../../../store/actions/app.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {


  isDiscover : boolean = false;
  isHome : boolean = false;
  isGenre : boolean = false;
  isAccount : boolean = false;

  constructor(private _router: Router,private store:Store) { }

  selectItem(index){
    if(index === 0){
      this.isDiscover = true;
      this.isHome = false;
      this.isGenre = false;
      this.isAccount = false;
    }else if(index === 1){
      this.isDiscover = false;
      this.isHome = true;
      this.isGenre = false;
      this.isAccount = false;
    }else if(index === 2){
      this.isDiscover = false;
      this.isHome = false;
      this.isGenre = true;
      this.isAccount = false;
    }else{
      this.isDiscover = false;
      this.isHome = false;
      this.isGenre = false;
      this.isAccount = true;
    }
  }

  ngOnInit(): void {
    let username = Cookies.get('username');
    console.log(username)
    if(username == '' || username == undefined ){
      // if(!currentState.loginBool){
        console.log('here')
        this._router.navigate(['login']);
      // }
    }else{
      this.store.dispatch(checklogin({ isLoggedIn: true }));
    }

    let currentUrl = window.location.href;
    if(currentUrl.indexOf('discover') !== -1 ){
      this.selectItem(0)
    }else if(currentUrl.indexOf('home') !== -1 ){
      this.selectItem(1)
    }else if(currentUrl.indexOf('genre') !== -1 ){
      this.selectItem(2)
    }else if(currentUrl.indexOf('account') !== -1 ) {
      this.selectItem(3)
    }

  }

}
