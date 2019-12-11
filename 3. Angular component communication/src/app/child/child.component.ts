import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() public parentData; // 1st way
  // @Input('parentData') public name;  //2nd way

  @Output() public childEvent = new EventEmitter();
  fireEvent() {
    this.childEvent.emit('from child component');
  }


}
