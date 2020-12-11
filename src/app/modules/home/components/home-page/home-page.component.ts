import { Component, OnInit } from '@angular/core';
import { BeURL } from '../../../../../global';
import { Store} from '@ngrx/store';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  state;
  constructor(private store:Store) { }

  getState(){
    let state;
    this.store.select(state => state).pipe(take(1)).subscribe(
       s => {
         state = s
       }
    );
    return state.reducer;
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
      console.log(data)
    }).catch(e=>{
      console.log(e);
    })
  }

  ngOnInit(): void {
    this.state = this.getState();
    this.getAllBookmarked()
  }

}
