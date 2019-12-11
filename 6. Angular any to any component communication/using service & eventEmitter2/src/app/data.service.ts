import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public eventEmitter = new EventEmitter();
  changeMsg(msg) {
    this.eventEmitter.emit(msg)
  }
}
