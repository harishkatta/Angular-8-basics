import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private _dataservice: DataService) { }
  public message;

  ngOnInit() {
    this._dataservice.eventEmitter.subscribe(siblingvalue => (this.message = siblingvalue));
    this._dataservice.messageSource.subscribe(serviceSubjectValue => (this.message = serviceSubjectValue))
  }

}
