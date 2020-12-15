import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import Cookies from 'js-cookie';
import { Store} from '@ngrx/store';
import { Router } from '@angular/router';


import { checklogin } from '../../../../store/actions/app.actions';
import { scaperURL } from '../../../../../global';

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
  mode: string = 'manga';
  focusBool: boolean = false;
  data = [];
  @ViewChild('searchInp') searchInp:ElementRef;

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

  getAutoCompleteResults(){
    let title = this.searchInp.nativeElement.value;
    if(title.length>=2){
      if(this.mode === 'manga'){
        console.log(title)
        fetch(scaperURL+"autocomplete",{
          method: 'POST',
          headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
          body: JSON.stringify({
            type:'manga',
            title: title
          })
        }).then(res=>{
          return res.json();
        }).then(data=>{
          this.data = data.message;
        })
      }
    }
  }
  handleSearchRedirect(name){
    this._router.navigate(['dashboard/search'],{ queryParams: {type:'manga', title: name } });
  }

  isFocused(){
    this.focusBool = true;
  }

  isNotFocused(){
    setTimeout(()=>{
      this.focusBool = false;
      this.searchInp.nativeElement.value = '';
      this.data = [];
    },200);
  }

  ngOnInit(): void {
    let username = Cookies.get('username');
    if(username == '' || username == undefined ){
        this._router.navigate(['login']);
    }else{
      this.store.dispatch(checklogin({ isLoggedIn: true }));
    }

    let currentUrl = window.location.href;
    if(currentUrl.indexOf('discover') !== -1 ){
      this.selectItem(0);
    }else if(currentUrl.indexOf('home') !== -1 ){
      this.selectItem(1);
    }else if(currentUrl.indexOf('genre') !== -1 ){
      this.selectItem(2);
    }else if(currentUrl.indexOf('account') !== -1 ) {
      this.selectItem(3);
    }else if(currentUrl.indexOf('search?') !== -1 || currentUrl.indexOf('mangaView') !== -1 || currentUrl.indexOf('chapViewer') !== -1 ){
      //skip
    }else{
      this._router.navigate(['/dashboard/discover']);
      this.selectItem(0);

    }

  }

}
