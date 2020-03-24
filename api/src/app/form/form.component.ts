import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Usuario } from '../dto/usuarioDto';
import { UsuarioService } from '../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor( 
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.cargarUsuario();
  }

  cargarUsuario(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.usuarioService.getusuario(id).subscribe(usuario => this.usuario = usuario);
      }
    })
  }

  create(): void{
    this.usuarioService.create(this.usuario).subscribe(
      rspt => {
        this.router.navigate(['/consulta']);
        swal.fire('Registro Agregado', `Registro numero ${rspt.id} Agregado Con Exito!`, 'success');
      }
    )
  }

  update():void {
    this.usuarioService.update(this.usuario)
    .subscribe( res => {
      this.router.navigate(['/consulta'])
        swal.fire('Registro Actualizado', `Registro ${res.id} Actualizado Con Exito!`, 'success');
    })
  }
  
}
