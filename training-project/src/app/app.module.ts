import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftsidebarComponentComponent } from './components/leftsidebar-component/leftsidebar-component.component';
import { RightsidebarComponentComponent } from './components/rightsidebar-component/rightsidebar-component.component';
import { CentreComponentComponent } from './components/centre-component/centre-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    LeftsidebarComponentComponent,
    RightsidebarComponentComponent,
    CentreComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
