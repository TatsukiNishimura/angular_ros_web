import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RosComponent } from './ros/ros.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { NgJoystickModule } from 'ng-joystick';
import { JoystickComponent } from './ros/joystick/joystick.component';

@NgModule({
  declarations: [
    AppComponent,
    RosComponent,
    NavbarComponent,
    HomeComponent,
    JoystickComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgJoystickModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
