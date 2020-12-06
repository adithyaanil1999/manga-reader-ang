import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { take } from 'rxjs/operators';
import { ActivatedRoute} from '@angular/router';
import { scaperURL } from '../../../../../global';
// import {https} from 'node'; 

// import cheerio from '@types/cheerio'

@Component({
  selector: 'app-manga-viewer',
  templateUrl: './manga-viewer.component.html',
  styleUrls: ['./manga-viewer.component.css']
})
export class MangaViewerComponent implements OnInit {

  isMobile:boolean = false;
  sub;
  data;
  isSpinner:boolean = true;
  
  constructor(private route: ActivatedRoute,private store:Store) { }

  getState(){
    let state;
    this.store.select(state => state).pipe(take(1)).subscribe(
       s => {
         state = s
       }
    );
    return state.reducer;
  }



  getImages(link){
    // link = 'https://mangapark.net/manga/gosu/i2613978/c205/'
    link = link.substring(0,link.lastIndexOf('/'))
    fetch(scaperURL+"getImageList",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({url:link})
    }).then(res=>{return res.json()})
      .then(data=>{
        this.data = data.imageList;
        console.log(data.imageList)
        this.isSpinner = false;
        console.log(this.isSpinner)
      })

  }

  ngOnInit(): void {
    this.isMobile = this.getState().mobileBool;
    console.log(this.isMobile);
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.getImages(params.link)
      });
  }

}
