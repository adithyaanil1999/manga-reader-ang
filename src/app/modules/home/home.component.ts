import { Component, OnInit } from '@angular/core';
import Cookies from 'js-cookie';
import { Router } from '@angular/router';
import { Store,select} from '@ngrx/store';
import { take } from 'rxjs/operators';

import { checklogin } from '../../store/actions/app.actions'


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router,private store:Store) { }
  getState(store){
    let state;
    store.select(state => state).pipe(take(1)).subscribe(
       s => {
         state = s
       }
    );
    
    return state.reducer;
  }
  handleScroll(e){
    console.log("move");
    e.preventDefault();
  }
  ngOnInit(): void {
    let username = Cookies.get('username');
    if(username == '' || username == undefined ){
      // if(!currentState.loginBool){
        this._router.navigate(['login']);
      // }
    }else{
      this.store.dispatch(checklogin({ isLoggedIn: true }));
      this._router.navigate(['dashboard']);
    }

    // let currentState = this.getState(this.store)
    // if(!currentState.loginBool){
    //   this._router.navigate(['login']);
    // }

    console.log('v1.2')
    
  }

}
