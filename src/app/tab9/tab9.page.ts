import { Component} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab9',
  templateUrl: './tab9.page.html',
  styleUrls: ['./tab9.page.scss'],
})
export class Tab9Page{

  data: any = [];

  constructor(private http: HttpClient,private router: Router) {
    this.getC();
  }

  getC(){
    const url = 'http://localhost/atencion_ciudadana/ver_contactos.php'; // Cambia la URL según tu configuración
    this.http.get<any[]>(url).subscribe(
      (data) => {
        this.data = data;
        console.log(this.data);
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }

  deleteContact(id: number) {
    const url = `http://localhost/atencion_ciudadana/eliminar_contactos.php?id=${id}`; // Cambia la URL según tu configuración

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http.delete(url, { headers }).subscribe(
      (response: any) => {
        console.log('Contacto eliminado exitosamente:', response);
        this.getC(); // Volver a cargar la lista de contactos después de la eliminación
      },
      (error) => {
        console.error('Error al eliminar el contacto:', error);
      }
    );
  }

  redirectToTab7() {
    // Redireccionar a la página tab7
    this.router.navigateByUrl('/tabs-admin/tab7');
  }

}
