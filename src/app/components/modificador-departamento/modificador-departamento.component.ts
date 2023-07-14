import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {departamanetoDto} from '../../types/departamaneto-dto';

@Component({
  selector: 'app-modificador-departamento',
  templateUrl: './modificador-departamento.component.html',
  styleUrls: ['./modificador-departamento.component.css']
})
export class ModificadorDepartamentoComponent implements OnInit {

  departamentoChange: departamanetoDto;
  @Output() valorCampoChange = new EventEmitter<departamanetoDto>();

  nombre: string;
  telefono: string;
  correo: string;

  constructor() { }

  ngOnInit() {
  }

  departamentoSeleccionado(departamento: departamanetoDto) {
    this.departamentoChange = departamento;
    this.nombre = this.departamentoChange.nombre;
    this.correo = this.departamentoChange.correo;
    this.telefono = this.departamentoChange.telefono;
  }

  cambiarDatos() {
    this.departamentoChange.nombre = this.nombre;
    this.departamentoChange.correo = this.correo;
    this.departamentoChange.telefono = this.telefono;
    this.valorCampoChange.emit(this.departamentoChange);
  }

}
