import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { scaperURL } from '../../../../../global';
import { currentMangaDetails } from '../../../../store/actions/app.actions'
import { Store} from '@ngrx/store';
import { take } from 'rxjs/operators';


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

  constructor(private store:Store,private route: ActivatedRoute,private router: Router) { }

  handleLink(link){
    console.log(link);
    this.router.navigate(['chapViewer'],{ queryParams: { link: link } });

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
  
  getMangaDetails(link){
    console.log(link)
    fetch(scaperURL+"getMangaInfo",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({url:link})
    }).then(res=>{return res.json()})
      .then(data=>{
        this.data = data.mangaInfo;
        this.store.dispatch(currentMangaDetails({mangaDetails:{...this.data}}));
        this.setSpinner = false;
        this.data.desc = this.data.desc.split(':')[1];
      })
  }
  ngOnInit(): void {
    this.setSpinner = true;
    this.state = this.getState();
    console.log(this.state)
    if(this.state['mangaObject']){
      this.data = this.state['mangaObject'];
      this.setSpinner = false;
    }else{
      this.substate = true;
      this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.getMangaDetails(params.link)
    });
    }
    
  }

  ngOnDestroy() {
    if(this.substate){
      this.sub.unsubscribe();
    }
  }

}
