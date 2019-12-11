import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private _dataservice: DataService) { }
  public msg2 = 'child2 msg';

  ngOnInit() {
    this._dataservice.eventEmitter.subscribe(msg => (this.msg2 = msg));
  }
  fireMsg() {
    this._dataservice.changeMsg('from child2');
  }

}
