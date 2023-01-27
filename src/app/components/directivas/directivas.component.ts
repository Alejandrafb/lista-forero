import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante'

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  subtitulo: string = "Estudiantes Hoy";
  variable1: number = 5;
  estudianteActual: Estudiante = {
    nombre: 'Camilo',
    edad: 22,
    estaActivo: true
  };
  listaEstudiantes: Array<Estudiante> = [
    {
      nombre: 'Camilo',
      edad: 22,
      estaActivo: true
    },
    {
      nombre: 'Sofia',
      edad: 25,
      estaActivo: false
    },
    {
      nombre: 'Esteban',
      edad: 30,
      estaActivo: true
    },
    {
      nombre: 'Mike',
      edad: 22,
      estaActivo: true
    },
    {
      nombre: 'Alejandra',
      edad: 22,
      estaActivo: false
    },
    {
      nombre: 'Lili',
      edad: 22,
      estaActivo: true
    },
    {
      nombre: 'Pedro',
      edad: 22,
      estaActivo: true
    },
  ];

}

