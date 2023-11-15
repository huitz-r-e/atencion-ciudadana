import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ApiServiceService } from '../api-service.service';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-tabs-admin',
  templateUrl: 'tabs-admin.page.html',
  styleUrls: ['tabs-admin.page.scss'],
})
export class TabsAdminPage {
  handlerMessage = '';
  roleMessage = '';

  constructor(private navCtrl: NavController, private apiService: ApiServiceService, private alertController: AlertController, private authService:AuthServiceService) { }

  async logout() {

    const alert = await this.alertController.create({
      header: 'Confirmar cierre de sesión',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cierre de sesión cancelado');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            // Cierra sesión (implementa esta función en tu servicio de autenticación si es necesario)
            // this.apiService.logout();
            // console.log('Cierre de sesión realizado');
            // // Redirige a la carpeta de pestañas (tabs)
            // this.navCtrl.navigateRoot('/tabs');
            // //recarga la pagina de tabs
            // this.navCtrl.navigateForward('/tabs');
            this.authService.signOut()
            .then(() => {
              console.log('se ha cerado la sesión con exito');
            this.navCtrl.navigateRoot('/tabs');
            //recarga la pagina de tabs
            this.navCtrl.navigateForward('/tabs');
              
              
            }).catch((error) => {
              // An error happened.
              console.log(error);
              
            });            
          }
        }
      ]
    });

    await alert.present();
  }
}



