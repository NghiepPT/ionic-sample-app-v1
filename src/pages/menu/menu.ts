import{Component} from "@angular/core";

import { LoadingController } from 'ionic-angular';

@Component({
    templateUrl:"menu.html"
})

export class MenuPage{
    constructor(public loadingCtrl: LoadingController) {
    }
  
    // presentLoading() {
    //   let loader = this.loadingCtrl.create({
    //     content: "Please wait...",
    //     duration: 3000
    //   });
    //   loader.present();
    // } 
}