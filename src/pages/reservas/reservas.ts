import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ReservaProvider } from '../../providers/reserva/reserva';
import { HomePage } from '../home/home';
import { RequestOptions, Headers, Http } from '@angular/http';
import { VerReservasPage } from '../ver-reservas/ver-reservas';

/**
 * Generated class for the ReservasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservas',
  templateUrl: 'reservas.html',
})


export class ReservasPage {
  private url:string = "http://localhost:3000/reserva";
  public cadastro = {
        nome: "",  
        entrada: "", 
        datae:"", 
        saida:"",
        datas:"",
				num:"",  
				quarto:""
  }
  Enviar(cadastro){

     let headers = new Headers ();
     headers.append('Content-type','application/json');

    let options = new RequestOptions({ headers: headers});
    this.http.post(this.url, cadastro, options)
    .map(res => res.json())
    .subscribe(data => {let toast = this.toastCtrl.create({
      message: 'Salvo Com Sucesso',
      duration: 1000
    });
    toast.present();
    cadastro.nome = "",
    cadastro.entrada = "",
    cadastro.datae = "",
    cadastro.datas = "",
    cadastro.saida = "",
    cadastro.num = "",
    cadastro.quarto = ""
  });
    
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService:ReservaProvider,public http:Http,public toastCtrl:ToastController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservasPage');
  }
  Sair(){
    this.authService.Sair()
    .then(() => {
        this.navCtrl.setRoot(HomePage)
    })
    .catch((error) => {
      console.error(error);
    });
  }
  pagMostrar(){
    this.navCtrl.push(VerReservasPage)
  }
}
