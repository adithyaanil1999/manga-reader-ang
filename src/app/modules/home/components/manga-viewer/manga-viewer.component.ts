import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { take } from 'rxjs/operators';
import { ActivatedRoute} from '@angular/router';
import { scaperURL } from '../../../../../global';
// import {https} from 'node'; 

import cheerio from 'cheerio'

@Component({
  selector: 'app-manga-viewer',
  templateUrl: './manga-viewer.component.html',
  styleUrls: ['./manga-viewer.component.css']
})
export class MangaViewerComponent implements OnInit {

  isMobile:boolean = false;
  sub;
  data;
  
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
    // console.log(link)
    // fetch(scaperURL+"getImageList",{
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
    //   body: JSON.stringify({url:link})
    // }).then(res=>{return res.json()})
    //   .then(data=>{
    //     this.data = data.imageList;
    //     console.log(this.data)
    //   })

    let url = link;
    let imageList = []

    if(url.indexOf('manganelo') !== -1){
        console.log('scrap')
      // MANGAKAKALOT SCRAPER

      // http.get(url, (resp) => {
      //     let html = '';
  
      //     resp.on('data', chunk => {
      //         html += chunk;
      //     });
  
      //     resp.on('end', () => {
      //         const $ = cheerio.load(html);
              
      //         $('.vung-doc').children('img').each(function(i, el) {
      //             imageList.push($(el));
      //         });
      //         console.log(imageList);
              
      //     });
      // });
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'text/html');
        fetch(url,{
          mode: 'no-cors',
          method: 'get',
          headers: myHeaders}).then((res)=>{
          return res.text();
          // html = str(res);
          // const 
        }).then(data=>{
          console.log(data)
          // const $ = cheerio.load(data);
          // $('.container-chapter-reader').children('img').each(function(i, el) {
          //   imageList.push($(el));
          // });
          // console.log(imageList)
        });



    }

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
