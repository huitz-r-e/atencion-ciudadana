import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  data: any = [];

  constructor(private http: HttpClient) {
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

}
