import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HelloIonicPage } from '../pages/HelloPage/hello-ionic';
import {ActionPage} from '../pages/actionsheets/action-sheet';
import { BasicAlert} from '../pages/alerts/basic-alert';
@NgModule({
  declarations: [
    MyApp, 
    BasicAlert,   
    HelloIonicPage,
    ActionPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BasicAlert,
    HelloIonicPage,
    ActionPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
