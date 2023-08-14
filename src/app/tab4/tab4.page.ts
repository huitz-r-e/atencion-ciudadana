import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private menuCtrl: MenuController, private navCtrl: NavController, private authService: ApiServiceService) { }

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        if (response.success) {
          // Aquí puedes redirigir a otra página o realizar acciones necesarias
          console.log('Inicio de sesión exitoso');

          // Restablecer los valores de los campos de entrada
          this.username = '';
          this.password = '';

          // Ocultar las pestañas principales
          this.menuCtrl.enable(false, 'tabs');

          // Redirigir a la página tabs-admin
          this.navCtrl.navigateForward('tabs-admin'); // Ajusta la ruta según tu configuración

          // Iniciar sesión
          localStorage.setItem('loggedIn', 'true');

        } else {
          this.errorMessage = response.error_message;
        }
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }


}
