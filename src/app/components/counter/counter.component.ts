import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs'; 
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { selectCount } from '../../state/counter.selector';
import { decrement, increment, reset } from '../../state/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count$: Observable<number>; 

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
