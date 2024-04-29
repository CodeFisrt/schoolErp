import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './state/app.state';
import { selectCount } from './state/counter.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'schoolErp';
  count$: Observable<number>; 
  constructor(private router: Router,private store: Store<AppState>){
    this.count$ = this.store.select(selectCount);
    this.router.events.subscribe( event =>{ 
      //console.log(event?.type)
    })  
  }
}
