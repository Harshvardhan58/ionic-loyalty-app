import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  rootPage1:string;
  rootPage3:string;
  rootPage2:string;
  result:boolean;
  constructor(){
    this.rootPage1='HomePage';
    this.rootPage2='StoreListPage';
    this.rootPage3='ProfilePage';
  }
}
