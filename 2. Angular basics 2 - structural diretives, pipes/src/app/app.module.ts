import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { PipesComponent } from './pipes/pipes.component';
import { ConvertToSpacesPipe } from './pipes/custom.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NgTemplateComponent,
    PipesComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
