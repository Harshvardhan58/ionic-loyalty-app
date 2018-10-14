import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  pid:String;
  product:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private dataService:DataProvider,private storage:Storage,private toast:ToastController) {
  }

  async ionViewWillLoad() {
    this.pid=this.navParams.get('pid');
    await this.getProductDeatail(this.pid);
  }
  getProductDeatail(pid){
    this.dataService.getProduct(pid).then((data:any)=>{
      console.log(data._body);
      this.product = JSON.parse(data._body)[0];
    })
  }
  addToCart(){
    this.storage.get('user').then(user=>{
      this.dataService.addProductToCart(this.pid,user._id).then((data:any)=>{
        let result = JSON.parse(data._body)
        if(result.result=='success'){
          this.toast.create({
            message:`Added To Cart`,
            duration:3000
          }).present();
        }
        else if(result.result=='duplicate'){
          this.toast.create({
            message:`Already Present in cart`,
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
    })
  }
  navigateToCart(){
    this.navCtrl.push('CartPage');
  }
}
