import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular8';
  public greet = 'Hello from parent';
  public message;
  public namesList = ["Mr.Harish", "Ms.Nikitha", " ", "Mr.Suresh"];
  messageFun(event) {
    this.message = event;
  }
}
