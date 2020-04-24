import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyComponentsComponent } from "./my-components/my-components.component";
import { TopNavComponent } from "./my-components/top-nav/top-nav.component";
import { HeadersComponent } from './my-components/headers/headers.component';

@NgModule({
  declarations: [
    AppComponent , 
    MyComponentsComponent ,
    TopNavComponent,
    HeadersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
