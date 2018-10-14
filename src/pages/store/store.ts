import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {
  items=[];
  sid:String;
  storeName:String;
  constructor(public navCtrl: NavController, public navParams: NavParams,private dataService:DataProvider) {
    
  }

  async getProducts(infiniteScroll){
    await this.dataService.getProductsbyStore(this.sid).then((data:any)=>{
       console.log(data._body);
      if(JSON.parse(data._body).length==0 && infiniteScroll!=''){
        infiniteScroll.enable(false);
      }
      this.items = this.items.concat(JSON.parse(data._body));
    })
  }
  doInfinite(infiniteScroll): Promise<any> {
    return this.getProducts(infiniteScroll);
  }
  navigateToProduct(pid){
    this.navCtrl.push('ProductPage',{pid:pid});
  }
  navigateToCart(){
    this.navCtrl.push('CartPage');
  }
  ionViewWillEnter(){
    this.sid = this.navParams.get('sid');
    this.storeName = this.navParams.get('storename');
    this.getProducts('');
    console.log('ionViewDidLoad StorePage');
  }

}
