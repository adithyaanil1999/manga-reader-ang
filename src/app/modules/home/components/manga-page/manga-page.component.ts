import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { scaperURL } from '../../../../../global';


@Component({
  selector: 'app-manga-page',
  templateUrl: './manga-page.component.html',
  styleUrls: ['./manga-page.component.css']
})
export class MangaPageComponent implements OnInit {

  sub;
  data;
  setSpinner:boolean = false;

  constructor(private route: ActivatedRoute,private router: Router) { }

  handleLink(link){
    console.log(link);
    this.router.navigate(['chapViewer'],{ queryParams: { link: link } });

  }
  
  getMangaDetails(link){
    console.log(link)
    fetch(scaperURL+"getMangaInfo",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({url:link})
    }).then(res=>{return res.json()})
      .then(data=>{
        this.data = data.mangaInfo;
        console.log(this.data)
        this.setSpinner = false;
        this.data.desc = this.data.desc.split(':')[1];
      })
  }
  ngOnInit(): void {
    this.setSpinner = true;
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.getMangaDetails(params.link)
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
