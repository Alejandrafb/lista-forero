import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {
  formularioLogin: FormGroup;

  constructor (){
    let controles: any = {
      correo: new FormControl('e.for14@gmail.com', [Validators.required, Validators.pattern]),
      contrasena: new FormControl('Clave123', [ Validators.required, Validators.minLength(5)]),
      recordarCredenciales: new FormControl(false, [])
    }
    this.formularioLogin = new FormGroup(controles)
  }

}




