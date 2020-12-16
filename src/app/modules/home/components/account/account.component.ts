import { Component, OnInit } from '@angular/core';
import Cookies from 'js-cookie';
import { Store} from '@ngrx/store';
import { Router } from '@angular/router';
import { checklogin,userDetails } from '../../../../store/actions/app.actions';
import {prodBool} from '../../../../../global'


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private _router: Router,private store:Store) { }

  handleLogout(){
    if(prodBool){
      Cookies.remove('username',{domain: 'localhost'});
    }else{
      Cookies.remove('username',{domain: 'adithyaanil1999.github.io'});
    }
    this.store.dispatch(userDetails({userDetails:{}}));
    this.store.dispatch(checklogin({ isLoggedIn: false }));
    this._router.navigate(['login']);
  }

  ngOnInit(): void {
  }

}
