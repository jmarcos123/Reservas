import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { RedefinirPage } from '../pages/redefinir/redefinir';
import { ReservasPage } from '../pages/reservas/reservas';
import { VerReservasPage } from '../pages/ver-reservas/ver-reservas';
import { IonMaskModule } from '@pluritech/ion-mask'

import { ReservaProvider } from '../providers/reserva/reserva';

const config = {
  apiKey: "AIzaSyDeFsIVhoBqt-7jYoEd3V87BVNO4NTWYjU",
  authDomain: "reserva-ionic.firebaseapp.com",
  databaseURL: "https://reserva-ionic.firebaseio.com",
  projectId: "reserva-ionic",
  storageBucket: "reserva-ionic.appspot.com",
  messagingSenderId: "803386155378"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    RedefinirPage,
    ReservasPage,
    VerReservasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonMaskModule.forRoot(),
    HttpModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    RedefinirPage,
    ReservasPage,
    VerReservasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReservaProvider
  ]
})
export class AppModule {}
