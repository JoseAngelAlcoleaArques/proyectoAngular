import {DepartamentoIdEnum} from '../enum/departamento-id-enum';

// tslint:disable-next-line:class-name
export class departamanetoDto {
  public id: DepartamentoIdEnum;
  public nombre: string;
  public telefono: string;
  public correo: string;

  constructor(id: DepartamentoIdEnum, nombre: string, telefono: string, correo: string) {
    this.id = id;
    this.nombre = nombre;
    this.telefono = telefono;
    this.correo = correo;
  }
}
