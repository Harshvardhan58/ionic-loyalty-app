import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  items=[]
  reward:number;
  Total:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private dataService:DataProvider,private storage:Storage,private toast:ToastController) {

  }
  ionViewDidLoad() {
    this.getCart();
  }
  getCart(){
    this.storage.get('user').then(user=>{
      this.dataService.getCart(user._id).then((response:any)=>{
        response = JSON.parse(response._body);
        console.log(response);
        this.items = response;
        this.Total=0;
        for(let i of this.items){
          this.Total+=i.prod.price
        }
        this.reward = Math.ceil(this.Total/10);
      })
    })
  }
  delete(id){
    this.dataService.deleteProductFromCart(id).then(data=>{
        this.getCart();
        this.toast.create({
          message:`Item Deleted`,
          duration:3000
        }).present();
    })
  }
  buy(){
    this.storage.get('user').then(user=>{
      this.dataService.buy(user._id,this.reward).then((data:any)=>{  
        data = JSON.parse(data._body);
        if(data.result=='success'){
          this.storage.set('user',data.data);
          this.getCart();
        this.toast.create({
          message:`Transaction Complete`,
          duration:3000
        }).present();
        }
        else{
          this.toast.create({
            message:`Error! Please Try Again`,
            duration:3000
          }).present();
        }
      })
    });
  }
}
