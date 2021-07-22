export interface Plan {
  id?: Number;
  nombre: String;
  duracion: Number;
  calidad: String;
  tipo_cuenta: String;
  descripcion: String;
  precio: Number;
  precio_revendedor?: Number;
  precio_distribuidor?: Number;
  plataforma_id: Number;
}
