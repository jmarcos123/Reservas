import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';
import * as firebase from 'firebase/app';
/*
  Generated class for the ReservaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReservaProvider {

  public data:any;

  user:Observable<firebase.User>;

  constructor( public angularFireAuth:AngularFireAuth) {
    this.user = angularFireAuth.authState;
  }


  criarUsuario(user: User){
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
  }
  Sair(){
    return this.angularFireAuth.auth.signOut();
  }
  Entra(user: User){
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email,user.password);
  }
  redefir(email:string){
    return this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }
}
