import { Component, OnInit } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  // selector: 'app-test',
  // selector: '.app-test',
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public displayName = true;
  public pickcolor = 'color2';
  public Fruits = ["Apple", "Banana", "Manago", "orange"];
  constructor() { }

  ngOnInit() {
  }
}
