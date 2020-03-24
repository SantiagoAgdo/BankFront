import { Component, OnInit } from '@angular/core';
import { Usuario } from '../dto/usuarioDto';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  // variables
  usuarios: Usuario[];
  noUsers: boolean;
  diaparse: Date;
  dia: string;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
      res => this.usuarios = res
    );
    this.diaparse = this.getDia();
    this.dia = this.formatDate(this.diaparse);
  }
  getDia(): Date {
    var today = new Date();
    var dd = String(today.getDate());
    var mm = String(today.getMonth());
    var yyyy = today.getFullYear();
    return new Date(yyyy, parseInt(mm), parseInt(dd))
  }
  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [day, month, year].join('/');
  }
}
