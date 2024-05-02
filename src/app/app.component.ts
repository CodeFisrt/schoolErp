import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './state/app.state';
import { selectCount } from './state/counter.selector';
import { UserService } from './core/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'schoolErp';
  count$: Observable<number>; 
  constructor(private router: Router,private store: Store<AppState>,private userSercice: UserService){
    this.count$ = this.store.select(selectCount);
    this.router.events.subscribe( event =>{ 
      //console.log(event?.type)
    })  
  }

  onDarkMode( ){
    debugger;
    this.userSercice.data['mode'] = "Dark";
    this.userSercice.modeChange$.next('Dark');
    this.userSercice.modeChangeBehaviour$.next('Dark Mode')
  }
  onNormalMode() {
    debugger;
    this.userSercice.data['mode'] = "Normal";
    this.userSercice.modeChange$.next('Normal')
    this.userSercice.modeChangeBehaviour$.next('Normal Mode')
  }
}
