import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ApiServiceService } from '../api-service.service';
import { AuthServiceService } from '../services/auth-service.service';
import { getDatabase, ref, set } from "firebase/database";

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoginValid: boolean = false;

  constructor(private menuCtrl: MenuController, private navCtrl: NavController, private authService: ApiServiceService, private authFireS:AuthServiceService) { }

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
          this.navCtrl.navigateForward('tabs-admin/tab10'); // Ajusta la ruta según tu configuración

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


  login() {
    this.authFireS.login(this.username, this.password)
    .then((userCredential) => {
      // Éxito al iniciar sesión
      console.log('Inicio de sesión exitoso');
      const user = userCredential.user;
      localStorage.setItem('user',JSON.stringify(user));
      // Ocultar las pestañas principales
      this.menuCtrl.enable(false, 'tabs');
       // Redirigir a la página tabs-admin
      this.navCtrl.navigateForward('tabs-admin/tab10');
    })
    .catch((error) => {
      // Manejar errores de inicio de sesión
      const errorCode = error.code;
      const errorMessage = error.message;
      this.errorMessage=errorMessage;
      console.error('Error al iniciar sesión:', error);
    });
  }

  emailExists=false;

  signUp() {
    this.authFireS.signUp(this.username, this.password)
    .then((userCredential) => {
      // Éxito al iniciar sesión
      console.log('registro de usuario exitoso');
      const user = userCredential.user;
      localStorage.setItem('user',JSON.stringify(user));
      const userData = {
        email: this.username,
        role: 'Admin',
      };
      // Guarda datos en Realtime Database
      const database = getDatabase();
      const userRef = ref(database, 'users/' + user.uid);
      set(userRef, userData);
      this.navCtrl.navigateForward('tabs-admin/tab10');
      this.emailExists=false;
    })

    .catch((error) => {
      // Manejar errores de inicio de sesión
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error al iniciar sesión:', errorMessage);
      if (errorCode == 'auth/email-already-in-use') {
        // The account already exists with a different credential
        const emailUser = error.email;
        console.log(emailUser);
        this.emailExists=true;
        
      }
    });
  }


}
