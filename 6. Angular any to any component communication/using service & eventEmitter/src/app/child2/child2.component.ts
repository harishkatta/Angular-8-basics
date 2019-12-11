import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  public message;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.eventEmitter.subscribe(value => (this.message = value));
    this._dataService.messageSource.subscribe(serviceSubjectValue => (this.message = serviceSubjectValue))
  }
  changeMessage() {
    this._dataService.changeMessage('changed from child 2')
  }

}
