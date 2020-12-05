import { Component, OnInit } from '@angular/core';
import Cookies from 'js-cookie';
import { Store,select} from '@ngrx/store';
import { Router } from '@angular/router';

import { checklogin } from '../../../../store/actions/app.actions'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router: Router,private store:Store) { }

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
      // this._router.navigate(['dashboard']);
    }

  }

}
