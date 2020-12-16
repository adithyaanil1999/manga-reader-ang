import { Component, OnInit } from '@angular/core';
import { scaperURL } from '../../../../../global';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

import { genreObject } from '../../../../store/actions/app.actions'


@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  constructor(private _router: Router,private store:Store) { }
  data;
  state;
  src:string = '';
  setSpinner:boolean = false;

  handleTag(link){
    this._router.navigate(['dashboard/discover'],{ queryParams: { genre: link } });
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

  getGenreList(){
    this.setSpinner = true;
    fetch(scaperURL+"getGenres",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({
        src:this.src,
      })
    })
    .then(res=>res.json())
    .then(data=>{
      this.data = data.genreList;
      this.store.dispatch(genreObject({genreObj:this.data}))
      this.setSpinner = false;
    })
  }
  ngOnInit(): void {
    this.src = 'MGPK';
    this.state = this.getState();
    if(Object.keys(this.state['genreObj']).length === 0){
      this.getGenreList();
    }else{
      this.data = this.state['genreObj'];
    }
  }

}
