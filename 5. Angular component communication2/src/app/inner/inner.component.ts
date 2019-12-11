import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input('name') public name;
  @Output() public sendInnerEvent = new EventEmitter();
  sendToOuter(name) {
    this.sendInnerEvent.emit(name);
  }
}
