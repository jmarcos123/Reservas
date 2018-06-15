import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/reserva/user';
import { ReservaProvider } from '../../providers/reserva/reserva';
import { ReservasPage } from '../reservas/reservas';
/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  user: User = new User();
  @ViewChild('form') form:NgForm;
  constructor(public navCtrl: NavController, public toastCtrl:ToastController,public authService:ReservaProvider) {
  
  }

  criaConta() {
    if(this.form.form.valid){
      let toast = this.toastCtrl.create({duration: 3000, position:'bottom'});

      this.authService.criarUsuario(this.user)
      .then((user: any) => {
        toast.setMessage('Usuario criado com sucesso');
        toast.present();
        this.navCtrl.setRoot(ReservasPage);
      })
      .catch((error:any)=> {
        if (error.code == 'auth/email-already-in-use'){
          toast.setMessage('O email digitado já está em uso');
        }else if (error.code == 'auth/invalid-email'){
          toast.setMessage('O email digitado não é válido');
        }else if (error.code == 'auth/operation-not-allowed'){
          toast.setMessage('Não está habilitado criar usuários');
        }else if (error.code == 'auth/week-password'){
          toast.setMessage('A senha Digitada é muito fraca');
        }
        toast.present();
      });
    }
  }

}
