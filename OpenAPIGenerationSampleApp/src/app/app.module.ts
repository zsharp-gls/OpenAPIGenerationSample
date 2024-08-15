import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiConfiguration } from './_api/api-configuration';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: ApiConfiguration, useValue: { rootUrl: environment.apiUrl } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
