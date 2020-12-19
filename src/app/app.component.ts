import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Store} from '@ngrx/store';
import { checkMobile,userDetails } from './store/actions/app.actions';
import {version,defaultSRC,BeURL} from '../global';
import { take } from 'rxjs/operators';
import Cookies from 'js-cookie';
import { currentSource } from './store/actions/app.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Manga Reader';
  state;
  constructor(private deviceService: DeviceDetectorService,private store:Store) { }

  getState(){
    let state;
    this.store.select(state => state).pipe(take(1)).subscribe(
       s => {
         state = s
       }
    );
    return state.reducer;
  }

  ngOnInit() {
    console.log(version)
    this.store.dispatch(userDetails({userDetails:{username:Cookies.get('username')}}));
    this.store.dispatch(checkMobile({isMobile:this.deviceService.isMobile()}));
  }
}
