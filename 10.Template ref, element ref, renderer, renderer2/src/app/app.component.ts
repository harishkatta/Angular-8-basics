import { Component, ViewChild, ElementRef, AfterViewInit, Renderer, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Angular8';
  @ViewChild('divTag') divTagref: ElementRef
  constructor(private renderer: Renderer, private renderer2: Renderer2) { }

  ngAfterViewInit() {
    this.divTagref.nativeElement.style.color = 'red';
    //basically we shouldn't access/modify nativeElement in ngAfterViewInit, because it's not safe for platform browsers,
    // it's not supported by web workers, web worker never get to know when DOM updates,
    // the right way to use render

    this.renderer.setElementStyle(this.divTagref.nativeElement, 'color', 'green');
    //rendere is depreciated due performance issues, renderer2 will came into picture


    this.renderer2.setStyle(this.divTagref.nativeElement, 'color', 'blue');
  }
}
