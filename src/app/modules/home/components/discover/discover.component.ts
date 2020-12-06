import { Component, OnInit,ViewChild } from '@angular/core';
import { scaperURL } from '../../../../../global';
import { currentMangaLink } from '../../../../store/actions/app.actions';
import { Store,select} from '@ngrx/store';
import { Router } from '@angular/router';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  src : string = '';
  dataArr = [];
  pageNo:number = 1;

  @ViewChild('scrollCont') scrollCont: any;

  constructor(private _router: Router,private store:Store) { }

  getHotManga(pageNo){
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
      this.pageNo+=1;
      this.dataArr = this.dataArr.concat(data.LatestManga);
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
    this._router.navigate(['dashboard/mangaView'],{ queryParams: { link: link } });

  }

  ngOnInit(): void {
    this.src = "MGK";
    console.log('Discover Mounted!')
    this.getHotManga(this.pageNo);
  }

}
