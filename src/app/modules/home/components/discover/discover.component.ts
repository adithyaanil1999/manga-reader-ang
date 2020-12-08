import { Component, OnInit,ViewChild } from '@angular/core';
import { scaperURL } from '../../../../../global';
import { currentMangaLink } from '../../../../store/actions/app.actions';
import { Store,select} from '@ngrx/store';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';


import { latestMangaList,refreshMangaPage } from '../../../../store/actions/app.actions'

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  src : string = '';
  dataArr = [];
  pageNo:number = 1;
  state: {};
  setSpinner:boolean = false;

  getState(){
    let state;
    this.store.select(state => state).pipe(take(1)).subscribe(
       s => {
         state = s
       }
    );
    return state.reducer;
  }

  @ViewChild('scrollCont') scrollCont: any;

  constructor(private _router: Router,private store:Store) { }

  getHotManga(pageNo){
    this.setSpinner = true;
    let data = {
      src : this.src,
      page: pageNo,
    }
    fetch(scaperURL+"getMangaList",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(data)
    }).then((res)=>{
      return res.json();
    }).then((data)=>{
      this.setSpinner = false;
      this.dataArr = this.dataArr.concat(data.LatestManga);
      this.store.dispatch(latestMangaList({latestList:this.dataArr}))
      this.pageNo+=1;
    })
  }

  handleScroll(){
    const element = this.scrollCont.nativeElement;
    if( Math.ceil(element.scrollHeight - element.scrollTop) === element.clientHeight){
      this.getHotManga(this.pageNo);
    }
  }

  handleMangaClick(link){
    link = link.link;
    this.store.dispatch(currentMangaLink({currentMangaLink:link}))
    this.store.dispatch(refreshMangaPage({refreshMangaPage:true}));
    this._router.navigate(['dashboard/mangaView'],{ queryParams: { link: link } });
  }

  ngOnInit(): void {
    this.src = "MGPK";
    console.log('Discover Mounted!')
    this.state = this.getState();
    if(Object.keys(this.state['latestObject']).length === 0){
      console.log('getting list from api');
      this.getHotManga(this.pageNo);
    }else{
      console.log('getting data from nrgx')
      this.dataArr = this.state['latestObject']
    }
  }

}
