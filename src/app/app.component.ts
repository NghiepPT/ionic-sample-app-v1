import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HelloIonicPage } from '../pages/HelloPage/hello-ionic';
import { ActionPage } from '../pages/actionsheets/action-sheet';
import { BasicAlert } from '../pages/alerts/basic-alert';
import { PromptAlert } from '../pages/alerts/prompt-alert';
import { BasicNavPage } from '../pages/navigation/basic-navigation';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = ActionPage;
 //rootPage:any = BasicAlert;
 //rootPage:any = PromptAlert;
 //rootPage:any = BasicNavPage;
 rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

