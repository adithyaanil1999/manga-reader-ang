import { Component, OnInit,ViewChild } from '@angular/core';
import { scaperURL } from '../../../../../global';
import { Store } from '@ngrx/store';
import { ActivatedRoute,Router } from '@angular/router';
import { take } from 'rxjs/operators';


import { currentSource,currentMangaLink,latestMangaList,refreshMangaPage,pageNoObject } from '../../../../store/actions/app.actions'

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  sub;
  src : string = '';
  dataArr = [];
  pageNo:number = 1;
  pageNoGenre:number = 1;
  state: {};
  setSpinner:boolean = false;
  end:boolean = false;
  params;
  mode:string = '';


  @ViewChild('scrollCont') scrollCont: any;

  constructor(private route: ActivatedRoute,private _router: Router,private store:Store) { }

  getState(){
    let state;
    this.store.select(state => state).pipe(take(1)).subscribe(
       s => {
         state = s
       }
    );
    return state.reducer;
  }

  getGenreManga(){
    this.setSpinner = true;
    fetch(scaperURL+"genreManga",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({
        src: this.src,
        link:this.params.genre,
        page:this.pageNoGenre
      })
    }).then((res)=>{
      return res.json();
    }).then((data)=>{
      console.log(data)
      if(data.LatestManga === 'end'){
        this.setSpinner = false;
        this.end = true;
        console.log('end');
      }else{
        this.setSpinner = false;
        this.dataArr = this.dataArr.concat(data.LatestManga);
        this.pageNoGenre+=1;
      }
    });
  }

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
      this.store.dispatch(pageNoObject({pageNoObj:{discover:this.pageNo}}))
    })
  }

  handleScroll(){
    if(this.end === false){
      const element = this.scrollCont.nativeElement;
      if( Math.ceil(element.scrollHeight - element.scrollTop) === element.clientHeight){
        if(this.mode === 'latest'){
          this.getHotManga(this.pageNo);
        }else{
          this.getGenreManga();
        }
      }
    }
  }

  handleMangaClick(link){
    link = link.link;
    this.store.dispatch(currentMangaLink({currentMangaLink:link}))
    this.store.dispatch(refreshMangaPage({refreshMangaPage:true}));
    this._router.navigate(['dashboard/mangaView'],{ queryParams: { link: link } });
  }

  ngOnInit(): void {
    this.state = this.getState();
    
    if(this.state['currentSource'] === ''){
      this.store.dispatch(currentSource({currentSource:'MGPK'}));
      this.state = this.getState();
    }
    this.src = this.state['currentSource'];
    this.sub = this.route
    .queryParams
    .subscribe(params => {
          this.params = params;
          if('type' in this.params){
            this.mode = 'latest';
            this.end = false;
            this.dataArr = [];
            if(Object.keys(this.state['latestObject']).length === 0){
              console.log('getting list from api');
              this.getHotManga(this.pageNo);
            }else{
              console.log('getting data from nrgx')
              this.pageNo = this.state['pageNoObject']['discover']
              this.dataArr = this.state['latestObject']
            }
      
          }else{
            this.mode = 'genre';
            this.dataArr = [];
            this.getGenreManga();
          }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
