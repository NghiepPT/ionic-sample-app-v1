import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionPage } from '../actionsheets/action-sheet';
import {BasicAlert} from '../alerts/basic-alert';
import {PromptAlert} from '../alerts/prompt-alert';
import  {MenuPage} from '../menu/menu';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];
  constructor(public navCtrl: NavController) {
    this.items = [{
      'title': 'Action Sheet',
      'type': 'ActionSheet',
      'color': '#E63135',
      'icon': 'angular'
    },
    {
      'title': 'Basic Alert',
      'type': 'BasicAlert',
      'color': '#E63135',
      'icon': 'angular'
    },
    {
      'title': 'Prompt Alert',
      'type': 'PromptAlert',
      'color': '#E63135',
      'icon': 'angular'
    },
    {
      'title': 'Menu',
      'type': 'Menu',
      'color': '#E63135',
      'icon': 'angular'
    }
  ]
  }
  gotoPage(item:any)
  {       
    if(item.type =='ActionSheet')
    {     
      this.navCtrl.push(ActionPage);
    }
    else if(item.type =='BasicAlert')
    {
      this.navCtrl.push(BasicAlert);
    }
    else if(item.type =='PromptAlert')
    {
      this.navCtrl.push(PromptAlert);
    }
    else if(item.type =='Menu')
    {
      this.navCtrl.push(MenuPage);
    }
  
  }
}
