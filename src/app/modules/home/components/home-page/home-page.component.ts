import { Component, OnInit } from '@angular/core';
import { BeURL } from '../../../../../global';
import { Store} from '@ngrx/store';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { currentMangaLink,refreshMangaPage,bookmarkedList,refreshHomePage } from '../../../../store/actions/app.actions'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  state;
  setSpinner:boolean = false;
  dataArr = [];
  data = [];
  unreadArr = [];
  readArr = [];


  constructor(private store:Store,private _router: Router) { }

  getState(){
    let state;
    this.store.select(state => state).pipe(take(1)).subscribe(
       s => {
         state = s
       }
    );
    return state.reducer;
  }

  handleMangaClick(link){
    this.store.dispatch(currentMangaLink({currentMangaLink:link}))
    this.store.dispatch(refreshMangaPage({refreshMangaPage:true}));
    this._router.navigate(['dashboard/mangaView'],{ queryParams: { link: link } });
  }

  mergeDataArrays(arr1,arr2){
    function returnIndexOfMangaFromArr2(chapterTitle){
      for(let i=0;i<arr2.length;i++){
        if(arr2[i].manga_title === chapterTitle){
          return i;
        }
      }
    }
    let indexOfMangaFromArr2 = 0;
    for(let i=0;i<arr1.length;i++){
      indexOfMangaFromArr2 = returnIndexOfMangaFromArr2(arr1[i].manga_title)
      this.data.push({...arr1[i],...arr2[indexOfMangaFromArr2]})
    }
    this.store.dispatch(bookmarkedList({bookMarkedList:this.data}))
    this.splitData();
    this.setSpinner = false;
  }

  splitData(){
    for(let i=0; i < this.data.length ; i++){
      if(this.data[i].latest_chapter !== this.data[i].last_read_chapter){
        this.unreadArr.push(this.data[i]);
      }else{
        this.readArr.push(this.data[i]);
      }
    }
  }

  getSourceFromCode(code){
    if(code === 'MGPK'){
      return 'Manga Park'
    }else{
      return 'Unknown Source'
    }
  }

  getAllBookmarked(){
    fetch(BeURL+"getBookmarked",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({
        username: this.state['userDetailObject']['username'],
      })
    }).then(res=>{return res.json()})
    .then(data=>{
      if(data.message !== 0){
        this.dataArr = data.message;
        fetch(BeURL+"getBookmarkedInfo",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({
        userIndex: this.dataArr
        })
      }).then(res=>{return res.json()})
      .then(data=>{
        this.mergeDataArrays(this.dataArr,data.message)
      });
      }else{
        console.log('no bookmarks')
        this.setSpinner = false;
      }
  
    }).catch(e=>{
      console.log(e);
    })
  }

  ngOnInit(): void {
    this.setSpinner = true;
    this.state = this.getState();
    if(Object.keys(this.state['bookMarkedObj']).length === 0 || this.state['refreshHomePageBool'] === true){
      console.log('getting list from api');
      this.store.dispatch(refreshHomePage({refreshHomePageBool:false}))
      this.getAllBookmarked();
    }else{
      console.log('getting list from ngrx');
      this.data = this.state['bookMarkedObj'];
      this.splitData();
      this.setSpinner = false;
    }
  }

}
