import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {departamanetoDto} from '../../types/departamaneto-dto';
import {DepartamentoIdEnum} from '../../enum/departamento-id-enum';

@Component({
  selector: 'app-arbol-departamentos',
  templateUrl: './arbol-departamentos.component.html',
  styleUrls: ['./arbol-departamentos.component.css']
})
export class ArbolDepartamentosComponent implements OnInit {

  departamentoChange: departamanetoDto;
  @Output() valorSeleccionadoChange = new EventEmitter<departamanetoDto>();

  padre1 = new departamanetoDto(DepartamentoIdEnum.PADRE1, 'PAS', '654654123', 'pas@gmail.com');
  hijo1 = new departamanetoDto(DepartamentoIdEnum.HIJO1, 'ATENCIÓN AL USUARIO', '537573786', 'atencionalusuario@gmail.com');
  hijo2 = new departamanetoDto(DepartamentoIdEnum.HIJO2, 'INFORMÁTICA', '757375637', 'informatica@gmail.com');
  padre2 = new departamanetoDto(DepartamentoIdEnum.PADRE2, 'PDI', '854324159', 'pdi@gmail.com');
  hijo3 = new departamanetoDto(DepartamentoIdEnum.HIJO3, 'ENFERMERÍA', '794614535', 'enfermeria@gmail.com');
  hijo4 = new departamanetoDto(DepartamentoIdEnum.HIJO4, 'POLITÉCNICA', '852461346', 'politecnica@gmail.com');
  padre3 = new departamanetoDto(DepartamentoIdEnum.PADRE3, 'SERVICIOS', '458765892', 'servicios@gmail.com');
  hijo5 = new departamanetoDto(DepartamentoIdEnum.HIJO5, 'CAFETERÍA', '321456987', 'cafeteria@gmail.com');
  hijo6 = new departamanetoDto(DepartamentoIdEnum.HIJO6, 'REPROG', '714852369', 'reprog@gmail.com');
  hijo7 = new departamanetoDto(DepartamentoIdEnum.HIJO7, 'SERVICIO', '753951486', 'servicio@gmail.com');

  constructor() { }

  ngOnInit() {
  }

  departamentoSeleccionado(departamento: departamanetoDto) {
    this.departamentoChange = departamento;
    this.valorSeleccionadoChange.emit(this.departamentoChange);
  }

  changeDepartamento(departamento: departamanetoDto) {
    switch (departamento.id) {
      case DepartamentoIdEnum.PADRE1:
        this.padre1 = departamento;
        break;
      case DepartamentoIdEnum.PADRE2:
        this.padre2 = departamento;
        break;
      case DepartamentoIdEnum.PADRE3:
        this.padre3 = departamento;
        break;
      case DepartamentoIdEnum.HIJO1:
        this.hijo1 = departamento;
        break;
      case DepartamentoIdEnum.HIJO2:
        this.hijo2 = departamento;
        break;
      case DepartamentoIdEnum.HIJO3:
        this.hijo3 = departamento;
        break;
      case DepartamentoIdEnum.HIJO4:
        this.hijo4 = departamento;
        break;
      case DepartamentoIdEnum.HIJO5:
        this.hijo5 = departamento;
        break;
      case DepartamentoIdEnum.HIJO6:
        this.hijo6 = departamento;
        break;
      case DepartamentoIdEnum.HIJO7:
        this.hijo7 = departamento;
        break;
      default:
        break;
    }
  }

}
