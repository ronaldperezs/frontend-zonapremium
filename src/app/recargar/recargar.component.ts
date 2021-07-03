import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Usuario } from "app/dtos/usuario";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-recargar",
  templateUrl: "./recargar.component.html",
  styleUrls: ["./recargar.component.css"],
})
export class RecargarComponent implements OnInit {
  myControl = new FormControl();
  options: Usuario[] = [
    {
      email: "email@email",
      nombres: "nombres",
      apellidos: "apellidos",
      tipo_usuario: "",
      celular: 3211234567,
      saldo: 0
    },
  ];
  filteredOptions?: Observable<Usuario[]>;
  constructor() {}

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map((value) => (typeof value === "string" ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.options.slice()))
    );
  }
  private _filter(name: string): Usuario[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(
      (option) => option.email?.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
