import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page{
  title: string = '';
  description: string = '';
  image: File | null = null;

  constructor(private http: HttpClient,private router: Router,private route: ActivatedRoute) { }

  handleImageUpload(event: any) {
    this.image = event.target.files[0];
  }

  submitForm() {
    if (!this.title || !this.description || !this.image) {
      // Handle form validation or show error message
      return;
    }

    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('description', this.description);
    formData.append('image', this.image);

    this.http.post<any>('http://localhost/atencion_ciudadana/publicaciones.php', formData).subscribe(
      (response: any) => {
        // Handle success, redirect or show success message
        console.log('Publicación creada exitosamente:', response);
        // Restablecer los valores de los campos de entrada
        this.title = '';
        this.description = '';
        this.image = null;

      },
      (error) => {
        console.error('Error al crear la publicación:', error);
      }
    );
  }

  redirectToTab10() {
    // Redireccionar a la página tab9 con el mismo ID para forzar la actualización
    this.router.navigate(['/tabs-admin/tab10']);
  }


}
