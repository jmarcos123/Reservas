import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ReservaProvider } from '../../providers/reserva/reserva';

/**
 * Generated class for the RedefinirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-redefinir',
  templateUrl: 'redefinir.html',
})
export class RedefinirPage {
  userEmail: string = '';
  @ViewChild('form') form: NgForm;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toasCtrl:ToastController,public authService:ReservaProvider) {
  }
  Redefinir(){
    if(this.form.form.valid){
      let toast = this.toasCtrl.create({duration:3000,position:'bottom'});
      this.authService.redefir(this.userEmail)
      .then(() => {
        toast.setMessage('Solicitação foi Enviada');
        toast.present();
      })
      .catch((error: any) => {
        if(error.code == 'auth/invalid-email'){
          toast.setMessage('o email digitado não é valido');
        }else if(error.code == 'auth/user-not-found'){
          toast.setMessage('O usuario não foi encontrado');
        }
        toast.present();
      });
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RedefinirPage');
  }

}
