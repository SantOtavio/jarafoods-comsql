import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RestaurantelistService } from "src/app/services/restaurantelist.service";

@Component({
  selector: "app-restpage",
  templateUrl: "./restpage.component.html",
  styleUrls: ["./restpage.component.css"],
})
export class RestpageComponent implements OnInit {
  constructor(
    private router: Router,
    private RestaurantelistService: RestaurantelistService
  ) {}

  ngOnInit() {
    this.findFoods();
  }

  backToList() {
    this.router.navigate(["listrestaurante"]);
  }

  addToCart() {}

  foodList = [];

  findFoods() {
    this.RestaurantelistService.buscarComidas(localStorage.getItem("ID")).then(
      (resultado) => {
        console.log(resultado);
        this.foodList.push(resultado);
      }
    );
  }
}
