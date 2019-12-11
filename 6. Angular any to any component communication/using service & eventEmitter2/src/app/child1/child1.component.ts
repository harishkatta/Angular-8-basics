import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private _dataservice: DataService) { }
  public msg1 = 'child1 msg';;

  ngOnInit() {
    this.msg1 = this._dataservice.eventEmitter.subscribe(msg => (this.msg1 = msg));
  }
  fireEvent() {
    this._dataservice.changeMsg('from child1');
  }

}
