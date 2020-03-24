import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';
import { Usuario } from '../dto/usuarioDto';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  despliegueAlerta: boolean = false;
  usuarioIngresado: string = "";
  contrasena: string = "";
  formGroup: FormGroup;
  formGroupDetail: FormGroup;
  loginRight: boolean = false;
  usuarioPrueba: string = "santiago";
  passPrueba: string = "123456"
  day: Date;
  days: string;
  registro: boolean = false;
  consulta: boolean = false;
  edit: boolean = false;

  formControlArray = {
    'user': new FormControl('', [Validators.minLength(1)]),
    'pass': new FormControl('', [Validators.minLength(1)])
  }

  constructor() {this.formGroup = new FormGroup(this.formControlArray)}

  ngOnInit() {
    const yyyy = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(this.day);
    const mm = new Intl.DateTimeFormat('en', { month: 'short' }).format(this.day);
    const dd = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(this.day);
    this.days = `${dd}-${mm}-${yyyy}`
  }

  async getData() {
    this.usuarioIngresado = this.formGroup.controls['user'].value;
    this.contrasena = this.formGroup.controls['pass'].value;
  }

  onSubmit(customerData) {
    this.getData();
    // this.formGroup.reset();
    this.changePage(this.usuarioIngresado, this.contrasena);
  }

  changePage(user: string, pass: string) {
    if (user == this.usuarioPrueba && pass == this.passPrueba) {
      this.loginRight = true;
    } else {
      swal.fire(
        'Usuario y/o Contasena Incorrecto',
        '',
        'error'
      )
    }
  }

  forget() {
    this.despliegueAlerta = true;
    setTimeout(() => {
      this.despliegueAlerta = false;
    }, 5000);
  }

}
