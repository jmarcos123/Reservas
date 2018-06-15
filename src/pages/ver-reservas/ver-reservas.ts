import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the VerReservasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-reservas',
  templateUrl: 'ver-reservas.html',
})
export class VerReservasPage {
  private url:string = "http://localhost:3000/reserva";
  public dados: Array<{}>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.getAll()
  }
  getAll(){
    this.http.get(this.url)
    .map(res => res.json())
    .subscribe(data => {
      this.dados = data;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VerReservasPage');
  }

}
