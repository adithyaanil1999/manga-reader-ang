import { Component, OnInit,ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { scaperURL,BeURL } from '../../../../../global';
import { currentMangaDetails } from '../../../../store/actions/app.actions'
import { Store} from '@ngrx/store';
import { take } from 'rxjs/operators';
import { refreshMangaPage } from '../../../../store/actions/app.actions';


@Component({
  selector: 'app-manga-page',
  templateUrl: './manga-page.component.html',
  styleUrls: ['./manga-page.component.css']
})
export class MangaPageComponent implements OnInit {

  sub;
  data;
  setSpinner:boolean = false;
  state: Object;
  substate:boolean = false;
  lastRead:string = '';
  lastChapLink: string = '';
  lastChapTitle: string = '';

  constructor(private store:Store,private route: ActivatedRoute,private router: Router) { }

  getLastChapLink(link,title){
    this.lastChapLink = link;
    this.lastChapTitle = title;
  }
  handleLink(link,title){
    this.setSpinner = true;
    let data = {
      username: this.state['userDetailObject']['username'],
      src: this.getSourceFromUrl(),
      mangaTitle: this.data.title,
      chapTitle: title,
    }

    fetch(BeURL+"updateHistory",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(data)
    }).then(res=>{return res.json()})
    .then(data=>{
      if(data.message === "sucesss"){
        this.setSpinner = false;
        this.router.navigate(['chapViewer'],{ queryParams: { link: link } });
      }else{
        alert('Some error has occured');
        location.reload();
      }
    });
  }

  handleLastRead(){
    this.handleLink(this.lastChapLink,this.lastChapTitle);
  }

  highlightLastRead(){
    this.setSpinner = true;
    let dataSent = {
      username: this.state['userDetailObject']['username'],
      src: this.getSourceFromUrl(),
      mangaTitle: this.data.title,
    }
    fetch(BeURL+"getLastReadChapter",{method: 'POST',
    headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(dataSent)
    }).then(res=>{return res.json()})
    .then(data=>{
      this.setSpinner = false;
      this.lastRead = data.message;
    });
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

  getSourceFromUrl(){
    //UPDATE THIS WITH SOURCES
    let currentUrl = window.location.href;
    if(currentUrl.indexOf('mangapark.net') !== -1 ){
      return "MGPK";
    }
  }

  handleBookmark(){
    
  }
  
  getMangaDetails(link){
    fetch(scaperURL+"getMangaInfo",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({url:link})
    }).then(res=>{return res.json()})
      .then(data=>{
        this.data = data.mangaInfo;
        this.store.dispatch(currentMangaDetails({mangaDetails:{...this.data}}));
        this.setSpinner = false;
        this.highlightLastRead()
        if(this.data.desc.indexOf(':') !== -1){
          this.data.desc = this.data.desc.split(':')[1];
        }
      })
  }
  ngOnInit(): void {
    this.setSpinner = true;
    this.state = this.getState();
    if(this.state['refreshMangaPageBool'] === true){
      this.store.dispatch(refreshMangaPage({refreshMangaPage:false}));
      this.substate = true;
      this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.getMangaDetails(params.link)
      });
    }else{
      if(this.state['mangaObject']){

        let dataSent = {
          username: this.state['userDetailObject']['username'],
          src: this.getSourceFromUrl(),
          mangaTitle: this.state['mangaObject']['title'],
        }

        fetch(BeURL+"getLastReadChapter",{method: 'POST',
        headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify(dataSent)
        }).then(res=>{return res.json()})
        .then(data=>{
          this.highlightLastRead();
        });
        this.data = this.state['mangaObject'];
        this.setSpinner = false;
      }else{
        this.sub = this.route
        .queryParams
        .subscribe(params => {
        this.getMangaDetails(params.link)
        });
      }
    }    
  }

  ngOnDestroy() {
    if(this.substate){
      this.sub.unsubscribe();
    }
  }

}
