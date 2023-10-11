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
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CounterbuttonComponent } from './components/counter/counterbutton/counterbutton.component';
import { CountercustomComponent } from './components/counter/countercustom/countercustom.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogsdetailsComponent,
    BlogcreateupdateComponent,
    CounterComponent,
    HomeComponent,
    MenuComponent,
    CounterbuttonComponent,
    CountercustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
