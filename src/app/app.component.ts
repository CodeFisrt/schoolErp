import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'schoolErp';

  constructor(private router: Router){
    this.router.events.subscribe( event =>{ 
      console.log(event?.type)
    })  
  }
}
