import { Component, OnInit } from "@angular/core";
import { Plataforma } from "../dtos/plataforma";
import { PlataformaService } from "../services/plataforma.service";

@Component({
  selector: "app-plataformas",
  templateUrl: "./plataformas.component.html",
  styleUrls: ["./plataformas.component.css"],
})
export class PlataformasComponent implements OnInit {
  displayedColumns: string[] = ["nombre", "acciones"];
  plataformas?: Plataforma[];
  constructor(private plataformaService: PlataformaService) {}

  ngOnInit(): void {
    this.plataformaService.todos().subscribe(
      (plataformas) => {
        this.plataformas = plataformas;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  eliminar(id: Number): void {
    let r = confirm("esta seguro que desea eliminar plataforma id " + id);
    if (r == true) {
      this.plataformaService.delete(id).subscribe(
        () => {
          this.plataformas = this.plataformas?.filter(function (
            plataforma: Plataforma
          ) {
            return plataforma.id != id;
          });
          alert(`id plataforma ${id} eliminada exitosamente`);
        },
        (error) => {
          alert(`error al eliminar id plataforma ${id}`);
        }
      );
    }
  }
}
