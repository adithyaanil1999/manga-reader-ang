import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { take } from 'rxjs/operators';
import { ActivatedRoute} from '@angular/router';
import { scaperURL } from '../../../../../global';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manga-viewer',
  templateUrl: './manga-viewer.component.html',
  styleUrls: ['./manga-viewer.component.css']
})
export class MangaViewerComponent implements OnInit {

  isMobile:boolean = false;
  sub;
  data = [];
  dataBuffer;
  isSpinner:boolean = true;
  limitRate:boolean = true;
  
  constructor(private location: Location,private route: ActivatedRoute,private store:Store) { }

  getState(){
    let state;
    this.store.select(state => state).pipe(take(1)).subscribe(
       s => {
         state = s
       }
    );
    return state.reducer;
  }

  handleBackBtn(){
    this.location.back();
  }


  getImages(link){
    if(link.indexOf('mangadex') == -1 ){
      console.log(link);
    }else{
      // link = link.substring(0,link.lastIndexOf('/'))
    }
    fetch(scaperURL+"getImageList",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({url:link})
    }).then(res=>{return res.json()})
      .then(data=>{
        this.dataBuffer = data.imageList;
        this.displayImages();
        this.isSpinner = false;
      }).catch(e=>{
        console.log(e);
        this.location.back();
      })

  }

  displayImages(){
    let i = 0;
    let interval = setInterval(()=>{
      this.data.push(this.dataBuffer[i]);
      i++;
      if(i === this.dataBuffer.length - 1){
        clearInterval(interval);
      }
    },1000);
  }

  ngOnInit(): void {
    this.isMobile = this.getState().mobileBool;
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.getImages(params.link)
      });
  }

}
