import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-test',
  // selector: '.app-test',
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public url = window.location.href;
  public myId = 'testId';
  public title = "Angular interpolation";

  public hasError = false;
  public isSpecial = true;
  public successClass = "text-success";
  public isDisabled = false;
  public higLightColor = "Orange";
  public greetMessage;
  public userName = 'sample';

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };

  public styleBinding = {
    'color': 'yellow',
    'fontStyle': 'italic'
  };
  greet() {
    return 'welcome to Angular'
  }
  doGreet(event) {
    console.log('button', event)
    this.greetMessage = 'welcome to Angular 8 '
  }
  logInput(myinput) {
    console.log(myinput);
    console.log(myinput.value);
  }
  onInput(event) {
    this.userName = event.target.value
  }

}
