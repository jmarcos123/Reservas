import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { RedefinirPage } from '../redefinir/redefinir';
import { NgForm } from '@angular/forms';
import { ReservaProvider } from '../../providers/reserva/reserva';
import { User } from '../../providers/reserva/user';
import { ReservasPage } from '../reservas/reservas';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('form') form:NgForm;
  user: User = new User();
  constructor(public navCtrl: NavController, public toastCtrl:ToastController,public authService:ReservaProvider) {

  }

  Entra(){
    if(this.form.form.valid){
      this.authService.Entra(this.user)
      .then(()=> {
        this.navCtrl.setRoot(ReservasPage);
      })
      .catch((error:any) => {
        let toast = this.toastCtrl.create({duration:3000, position:'bottom'});
        if(error.code == 'auth/invalid-email'){
          toast.setMessage('O email digitado não é valido');
        }else if(error.code == 'auth/user-disabled'){
          toast.setMessage('Usuario está desativado');
        }else if(error.code == 'auth/user-not-found'){
          toast.setMessage('Usuario não encontrado');
        }else if(error.code == 'auth/wrong-password'){
          toast.setMessage('A senha digitada não é valida');
        }
        toast.present();
      });
    }
  }
  pagCadastro(){
    this.navCtrl.push(CadastroPage);
  }
  pagRedefinir(){
    this.navCtrl.push(RedefinirPage);
  }
}
