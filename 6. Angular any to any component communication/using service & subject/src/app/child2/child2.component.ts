import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }
  changeMessage() {
    this._dataService.changeMessage('changed from child 2')
  }

}
