import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import Cookies from 'js-cookie';
import { Store} from '@ngrx/store';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { checklogin,userDetails,currentSource, refreshHomePage, refreshGenrePage } from '../../../../store/actions/app.actions';
import {prodBool,BeURL} from '../../../../../global'


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private _router: Router,private store:Store) { }

  state;
  setSpinner:boolean = false;
  currentSrc:string = '';
  @ViewChild('srcOptions') src : ElementRef;

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

  getState(){
    let state;
    this.store.select(state => state).pipe(take(1)).subscribe(
       s => {
         state = s
       }
    );
    return state.reducer;
  }

  changeSource(){
    this.setSpinner = true;
    fetch(BeURL+"updateSrc",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({
        src:this.src.nativeElement.value,
        username:this.state['userDetailObject']['username']
      })
    }).then(res=>res.json())
    .then(data=>{
      this.setSpinner = false;
      if(data.message == 'success'){
        this.store.dispatch(currentSource({currentSource:this.src.nativeElement.value}))
        this.store.dispatch(refreshGenrePage({refreshGenrePageBool:true}));
        this.store.dispatch(refreshHomePage({refreshHomePageBool:true}))
      }else{
        alert("something went wrong");
      }
    })
    
  }

  ngOnInit(): void {
    this.state = this.getState();
    this.currentSrc = this.state['currentSource'];
  } 

}
