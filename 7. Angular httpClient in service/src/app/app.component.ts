import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular8';
  employees;
  errormsg;
  constructor(private dataservice: DataService) {

  }
  ngOnInit() {
    this.getEmployees();
    this.getMockData();
    this.getLanuages();
    this.getRates();
    this.getOrderBooks();
  }
  getEmployees() {
    return this.dataservice.getEmployees()
      .subscribe(
        emp => (this.employees = emp),
        error => this.errormsg = error,
        () => console.log('completed')
      );
  }
  getMockData() {
    return this.dataservice
      .getMockData()
      .subscribe(
        data => console.log(data),
        (error) => console.log("error", error)
      );
  }
  getLanuages() {
    return this.dataservice
      .getLanuages()
      .subscribe(
        data => console.log('languages', data)
      );
  }
  getOrderBooks() {
    return this.dataservice.getOrderBooks().subscribe(data => console.log('orderbooks', data));
  }
  getRates() {
    return this.dataservice.getRates().subscribe(data => console.log('rates', data));
  }
}
