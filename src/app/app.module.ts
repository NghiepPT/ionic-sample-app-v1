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
import { PromptAlert } from '../pages/alerts/prompt-alert';
import { BasicNavPage } from '../pages/navigation/basic-navigation';
import { NavigationDetailsPage } from '../pages/navigation/basic-nav-details';
@NgModule({
  declarations: [
    MyApp, 
    BasicAlert,   
    HelloIonicPage,
    ActionPage,
    HomePage,
    PromptAlert,
    BasicNavPage,
    NavigationDetailsPage
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
    HomePage,
    PromptAlert,
    BasicNavPage,
    NavigationDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
