import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogsdetailsComponent } from './components/blogs/blogsdetails/blogsdetails.component';
import { BlogcreateupdateComponent } from './components/blogs/blogcreateupdate/blogcreateupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogsdetailsComponent,
    BlogcreateupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
