import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Store} from '@ngrx/store';
import { checkMobile,userDetails } from './store/actions/app.actions';
import {version} from '../global';
import Cookies from 'js-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Manga Reader';
  constructor(private deviceService: DeviceDetectorService,private store:Store) { }

  ngOnInit() {
    console.log(version)
    this.store.dispatch(userDetails({userDetails:{username:Cookies.get('username')}}));
    this.store.dispatch(checkMobile({isMobile:this.deviceService.isMobile()}));
  }
}
