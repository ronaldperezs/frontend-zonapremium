import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  {
    state: "dashboard",
    type: "link",
    name: "Inicio",
    icon: "web",
  },
  {
    state: "usuarios",
    type: "link",
    name: "Usuarios",
    icon: "account_box",
  },
  {
    state: "plataformas",
    type: "link",
    name: "Plataformas",
    icon: "cast_connected",
  },
  {
    state: "planes",
    type: "link",
    name: "Planes",
    icon: "devices_other",
  },
  {
    state: "suscripciones",
    type: "link",
    name: "Suscripciones",
    icon: "app_registration",
  }
];

const MENU_USER = [
  {
    state: "dashboard",
    type: "link",
    name: "Inicio",
    icon: "web",
  },
  {
    state: "compras",
    type: "link",
    name: "Compras",
    icon: "attach_money",
  },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

  getMenuUser(): Menu[] {
    return MENU_USER;
  }
}
