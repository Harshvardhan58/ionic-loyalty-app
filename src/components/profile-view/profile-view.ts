import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent{

  @Input() profile:any;
  constructor(private storage:Storage,private navCtrl:NavController) {
    console.log('Hello ProfileViewComponent Component');
    
  }
  signOut(){
    this.storage.clear()
    .then(()=>{
      this.navCtrl.setRoot('LoginPage');
    });
  }
  
}
