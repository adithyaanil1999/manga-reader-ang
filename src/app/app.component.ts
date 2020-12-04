import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Store} from '@ngrx/store';
import { checkMobile } from './store/actions/app.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Manga Reader';
  constructor(private deviceService: DeviceDetectorService,private store:Store) { }

  ngOnInit() {
    this.store.dispatch(checkMobile({isMobile:this.deviceService.isMobile()}));
    
  }
}
