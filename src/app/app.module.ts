import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp(environment.firebase)), provideDatabase(() => getDatabase()),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

// provideFirebaseApp(() => initializeApp({"projectId":"atencionciudadana-b0edd","appId":"1:263208147296:web:6ed8ce9dc7bdb5ebc02605","storageBucket":"atencionciudadana-b0edd.appspot.com","apiKey":"AIzaSyDLCZLVtix2bBE_mXmVRwImLf4XfQsbf2o","authDomain":"atencionciudadana-b0edd.firebaseapp.com","messagingSenderId":"263208147296","measurementId":"G-HMYSKXH74T"}))