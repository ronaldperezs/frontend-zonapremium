export interface Suscripcion {
  id?: Number;
  plan_id: Number;
  email?: String;
  password?: String;
  usuario_id?: Number;
  emailUsuario?: String;
  fecha_compra?: Date;
  estado?: string;
}
