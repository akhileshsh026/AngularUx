import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavComponent } from './Component/top-nav/top-nav.component';
import { DownNavComponent } from './MyComponents/down-nav/down-nav.component';
import { MyComponentsComponent } from './my-components/my-components.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DownNavComponent,
    MyComponentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
