export class User {
  id: number;
  nombres: string;
  apellidos: string;
  correo: string;
  usuario: string;
  state: string;

  constructor(){
    this.id = null;
    this.nombres = '';
    this.apellidos = '';
    this.correo = '';
    this.usuario = '';
    this.state = '';
  }
}
