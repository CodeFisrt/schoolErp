import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {

  @Input( ) btnText: string= '';
  @Input() btnClassName: string = '';

  @Output() onBtnClick = new EventEmitter<string>();

  onClick() {
    debugger;
    this.onBtnClick.emit('HII')
  }
}
