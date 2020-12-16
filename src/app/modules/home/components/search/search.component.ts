import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store} from '@ngrx/store';
import { scaperURL } from '../../../../../global';
import { currentMangaLink,refreshMangaPage } from '../../../../store/actions/app.actions'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  sub;
  getParams;
  data;
  setSpinner:boolean = false;

  constructor(private store:Store,private route: ActivatedRoute,private _router: Router) { }

  getResults(){
    this.setSpinner = true;
    fetch(scaperURL+"search",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({
            type:this.getParams.type,
            title: this.getParams.title,
      })
    }).then(res => res.json())
      .then(data => {
        this.setSpinner = false;
        this.data = data.searchArray;
      })
  }

  handleMangaClick(link){
    this.store.dispatch(currentMangaLink({currentMangaLink:link}))
    this.store.dispatch(refreshMangaPage({refreshMangaPage:true}));
    this._router.navigate(['dashboard/mangaView'],{ queryParams: { link: link } });
  }
  
  ngOnInit(): void {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.getParams = params;
        this.getResults()
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
