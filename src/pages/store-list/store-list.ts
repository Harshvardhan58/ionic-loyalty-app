import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the StoreListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-list',
  templateUrl: 'store-list.html',
})
export class StoreListPage {
  items=[]
  constructor(public navCtrl: NavController, public navParams: NavParams,private dataService:DataProvider) {
    this.getStores('');
  }

  async getStores(infiniteScroll){
    await this.dataService.getData(this.items.length,'stores').then((data:any)=>{
       console.log(data._body);
      if(JSON.parse(data._body).length==0 && infiniteScroll!=''){
        infiniteScroll.enable(false);
      }
      this.items = this.items.concat(JSON.parse(data._body));
    })
  }
  doInfinite(infiniteScroll): Promise<any> {
    return this.getStores(infiniteScroll);
  }
  navigateToProduct(sid,storename){
    this.navCtrl.push('StorePage',{sid:sid,storename:storename});
  }
  navigateToCart(){
    this.navCtrl.push('CartPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
