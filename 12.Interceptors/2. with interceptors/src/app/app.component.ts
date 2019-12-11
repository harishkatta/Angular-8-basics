import { Component } from '@angular/core';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataservice: AppService) { }
  title = 'Angular8';
  getData() {
    this.dataservice.getData()
      .subscribe(
        data => console.log(data),
        (error) => console.log('in app component', error),
        () => console.log('completed')
      );
  }
}
