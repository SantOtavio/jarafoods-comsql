import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RestaurantelistService } from "src/app/services/restaurantelist.service";

@Component({
  selector: "app-listarestaurante",
  templateUrl: "./listarestaurante.component.html",
  styleUrls: ["./listarestaurante.component.css"],
})
export class ListarestauranteComponent implements OnInit {
  constructor(
    private router: Router,
    private RestaurantelistService: RestaurantelistService
  ) {}

  ngOnInit() {
    this.findRests();
  }

  editRest() {
    this.router.navigate(["editrestaurante"]);
  }

  logout() {
    localStorage.removeItem("USER");
    this.router.navigate(["/"]);
  }

  restlist = [];

  findRests() {
    this.RestaurantelistService.buscarRestaurante().then((resultado) => {
      this.restlist.push(resultado);
    });
    console.log(this.restlist);
  }

  goToRestPage(){
    this.router.navigate(["restpage"])
  }
}
