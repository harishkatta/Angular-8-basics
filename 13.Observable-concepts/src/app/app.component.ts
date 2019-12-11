import { Component, OnInit } from '@angular/core';
import {ApiTestService} from './service/api-test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Observable-concepts';
  constructor(private service: ApiTestService) { }
  ngOnInit() {
    console.log('onInit');
    this.service.getMockData().subscribe(data=>console.log('mock data',data));
    this.service.getLanguages().subscribe(
      (data) => {
      console.log('languages', data);
      },
      (error)=>{
          console.log('error', error)
      });
    this.service.getStudents().subscribe(data => {
      console.log('students', data);
    });
    this.service.getOrderBooks().subscribe(data => {
      console.log('orderbooks', data);
    });
    this.service.getRates().subscribe(data => {
      console.log('rates', data);
    });
    this.service.getLatestPrice().subscribe(data => {
      console.log('latest price', data);
    });
  }
}
