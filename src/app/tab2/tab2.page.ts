import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private alertController: AlertController) {}
  async showAlert() {
    const alert = await this.alertController.create({
      header: '¡Auxilio Enviado!',
      message: 'Tu auxilio ha sido enviado correctamente.',
     // buttons: ['Aceptar'],
    });

    await alert.present();
  }

}
