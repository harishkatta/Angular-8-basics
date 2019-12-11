import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public names = ['Harish', 'Nikitha', 'suresh']
  public name;
  // passing name to app-component
  @Output() eventFromMain = new EventEmitter();

  fromInnerEvent(event) {
    this.name = event;
    this.eventFromMain.emit(event);
  }
}
