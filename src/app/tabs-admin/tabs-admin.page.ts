import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-tabs-admin',
  templateUrl: 'tabs-admin.page.html',
  styleUrls: ['tabs-admin.page.scss'],
})
export class TabsAdminPage {

  constructor(private navCtrl: NavController,private apiService: ApiServiceService) { }



  logout() {
    // Cierra sesión (implementa esta función en tu servicio de autenticación si es necesario)
    this.apiService.logout();
    // Redirige a la carpeta de pestañas (tabs)
    this.navCtrl.navigateRoot('/tabs');
    //recarga la pagina de tabs
    this.navCtrl.navigateForward('/tabs');
  }

}
