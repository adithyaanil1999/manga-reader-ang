import { Component, OnInit } from '@angular/core';
import Cookies from 'js-cookie';
import { Router } from '@angular/router';
import { Store,select} from '@ngrx/store';
import { take } from 'rxjs/operators';
import { ReCaptchaV3Service } from 'ng-recaptcha';

import {BeURL} from '../../../../../global'
import { checklogin } from '../../../../store/actions/app.actions'

import md5 from 'md5';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkMobile : Boolean = false;
  signUpBool : Boolean = false;
  errorString : string = '';
  showSpinner: Boolean = false;

  constructor(private recaptchaV3Service: ReCaptchaV3Service,private _router: Router,private store:Store) {
   }


  getState(store){
    let state;
    store.select(state => state).pipe(take(1)).subscribe(
       s => {
         state = s
       }
    );
    
    return state.reducer;
 }


  toggleSignUp(){
    this.signUpBool = !this.signUpBool;
  }

  handleToken(token,uid,pass){
    let data={
      username: uid,
      password: md5(pass),
      token: token
    }
    
    fetch(BeURL+"login",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(data)
    }).then((data_res) => {
        return data_res.json();
    }).then((data) =>{
        console.log(data);
        if(data.message === 'failed'){
          this.showSpinner = false;
          this.errorString = 'Wrong Password';
        }else{
          this.errorString = '';
          this.showSpinner = false;
          //REDIRECT
          Cookies.set('username', uid,{ expires: 7 });
          this._router.navigate(['dashboard']);
        }
    });
  }

  handleSignIn(uid,pass){
    this.recaptchaV3Service.execute('submitLogin')
    .subscribe(
      (token) => {
        if(uid === '' || pass === ''){
          this.errorString = 'Fields must not be empty';
        }else if(uid.length < 6 ){
          this.errorString = 'Username is too short';
        }else if(uid.length >= 29 ){
          this.errorString = 'Username is too long';
        }else if(pass.length <8 ){
          this.errorString = 'Password is too short';
        }
        else{
          this.showSpinner = true;
          this.errorString = '';
          this.handleToken(token,uid,pass)
        }
        }
      );
    
  }

  handleSignUp(uid,pass,confPass){
    if(pass != confPass){
      this.errorString = 'Passwords do not match';
    }else if(uid.length < 6 ){
      this.errorString = 'Username is too short';
    }else if(uid.length >= 29 ){
      this.errorString = 'Username is too long';
    }else if(pass.length <8 ){
      this.errorString = 'Password is too short';
    }else{
      this.errorString = '';
      this.showSpinner = true;
      this.showSpinner = false;
      this.recaptchaV3Service.execute('submitSignUp')
      .subscribe(
      (token) => {
        var data ={
          username: uid,
          password: md5(pass),
          token: token
        }
        console.log('signUp')
        fetch(BeURL+"signUp",{
          method: 'POST',
          headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
          body: JSON.stringify(data)
        }).then((data_res) => {
            return data_res.json();
        }).then((data) =>{
            console.log(data)
            if(data.message === 'failed'){
              this.showSpinner = false;
              this.errorString = 'User Name exist,Try again';
            }else{
              this.errorString = '';
              this.showSpinner = false;
              //Create user
              Cookies.set('username', uid,{ expires: 7 });
              this._router.navigate(['dashboard']);
            }
        });

      });
    }
  }

  ngOnInit(): void {
    let currentState = this.getState(this.store);
    this.checkMobile = currentState.mobileBool;
    console.log("PROTECTED BY reCAPTCHAv3")

    let username = Cookies.get('username');
    if(username == '' || username == undefined ){
    }else{
      this.store.dispatch(checklogin({ isLoggedIn: true }));
      this._router.navigate(['dashboard']);
    }

  }

}
