import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
    templateUrl: 'basic-alert.html'
})
export class BasicAlert {
  constructor(public alertCtrl: AlertController) {
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
}