import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public title = "test CodeSandbox";
  public person = {
    firstName: "Harish",
    LastName: "Katta"
  };
  public date = new Date();
  public productCode = "TBX-0022";

  constructor() { }

  ngOnInit() {
  }

}
