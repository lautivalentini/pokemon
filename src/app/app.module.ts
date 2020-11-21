import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
