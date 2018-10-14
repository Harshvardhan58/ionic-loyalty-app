import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  ApiBaseURL = 'https://ionic58.herokuapp.com/';
  constructor(public http: Http) {
  }
  getData(params,type){
    return this.http.get(this.ApiBaseURL+type+'?'+'skip='+params).toPromise();
  }
  getProduct(pid){
    return this.http.get(this.ApiBaseURL+'productById?pid='+pid).toPromise();
  }
  addProductToCart(pid,id){
    return this.http.post(this.ApiBaseURL+'addProductToCart',{pid:pid,userid:id}).toPromise();
  }
  getCart(id){
    return this.http.get(this.ApiBaseURL+'getCartbyUser?userid='+id).toPromise();
  }
  deleteProductFromCart(id){
    return this.http.post(this.ApiBaseURL+'deleteProduct',{id:id}).toPromise();
  }
  buy(userid,reward){
    return this.http.post(this.ApiBaseURL+'buy',{userid:userid,reward:reward}).toPromise();
  }
  getProductsbyStore(sid){
    return this.http.get(this.ApiBaseURL+'productsByStore?sid='+sid).toPromise();
  }
}
