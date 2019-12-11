import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  public _name;
  constructor() { }

  ngOnInit() {
  }
  @Input()
  set nameFromParent(value: string) {
    this._name = value && value.trim();
  }
}
