import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public messageSource = new BehaviorSubject('default message');
  public eventEmitter = new EventEmitter();
  changeMessage(msg) {
    this.messageSource.next(msg);
  }

}
