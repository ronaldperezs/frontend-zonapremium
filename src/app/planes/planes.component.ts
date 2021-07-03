import { Component, OnInit } from "@angular/core";
import { Plan } from "../dtos/plan";
import { PlanService } from "../services/plan.service";

@Component({
  selector: "app-planes",
  templateUrl: "./planes.component.html",
  styleUrls: ["./planes.component.css"],
})
export class PlanesComponent implements OnInit {
  displayedColumns: string[] = ["nombre", "acciones"];
  planes?: Plan[];
  constructor(private planService: PlanService) {}

  ngOnInit(): void {
    this.planService.todos().subscribe(
      (planes) => {
        this.planes = planes;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  eliminar(id: Number): void {
    let r = confirm("esta seguro que desea eliminar plan id " + id);
    if (r == true) {
      this.planService.delete(id).subscribe(
        () => {
          this.planes = this.planes?.filter(function (plan: Plan) {
            return plan.id != id;
          });
          alert(`id plan ${id} eliminada exitosamente`);
        },
        (error) => {
          alert(`error al eliminar id plan ${id}`);
        }
      );
    }
  }
}
