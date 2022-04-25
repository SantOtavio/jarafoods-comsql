import { Component, OnInit } from "@angular/core";
import { RestaurantelistService } from "src/app/services/restaurantelist.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-cartpage",
  templateUrl: "./cartpage.component.html",
  styleUrls: ["./cartpage.component.css"],
})
export class CartpageComponent implements OnInit {
  constructor(
    private RestaurantelistService: RestaurantelistService,
    private router: Router
  ) {}

  ngOnInit() {
    this.findItensCart();
  }

  foodList = [];

  findItensCart() {
    this.RestaurantelistService.buscarCarrinho(
      localStorage.getItem("USER")
    ).then((resultado) => {
      console.log(resultado);
      this.foodList.push(resultado);
    });
  }

  finishOrder() {
    alert("Pedido Realizado!");
    this.router.navigate(["finishorder"]);
  }

  clearOrder() {
    this.RestaurantelistService.limparCarrinho(
      localStorage.getItem("USER")
    ).then((resultado) => {
      console.log(resultado);
    });
    window.location.reload();
  }
}
