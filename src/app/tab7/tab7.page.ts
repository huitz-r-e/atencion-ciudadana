import { Component} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page{
  nombre: string = '';
  telefono: string = '';
  errorMessage: string = '';


  constructor(private http: HttpClient,private router: Router,private route: ActivatedRoute) {}

  submitForm() {
    if (!this.nombre || !this.telefono) {
      this.errorMessage = 'Por favor, completa todos los campos.';
      return;
    }

    const url = 'http://localhost/atencion_ciudadana/contactos.php';
    const formData = new FormData();
    formData.append('nombre', this.nombre);
    formData.append('telefono', this.telefono);

    this.http.post(url, formData).subscribe(
      (response: any) => {
        if (response.message) {
          console.log('Contacto creado exitosamente:', response.message);
          // Limpia los campos
          this.nombre = '';
          this.telefono = '';
          this.errorMessage = '';
        } else if (response.error) {
          console.error('Error al crear el contacto:', response.error);
          this.errorMessage = 'Error al crear el contacto. Por favor, intenta nuevamente.';
        }
      },
      (error) => {
        console.error('Error en la solicitud:', error);
        this.errorMessage = 'Error en la solicitud. Por favor, intenta nuevamente.';
      }
    );
  }
  redirectToTab9() {
    // Redireccionar a la página tab9 con el mismo ID para forzar la actualización
    this.router.navigate(['/tabs-admin/tab9']);
  }

}
