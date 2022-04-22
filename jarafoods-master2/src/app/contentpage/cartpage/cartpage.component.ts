import { Component, OnInit } from "@angular/core";
import { RestaurantelistService } from "src/app/services/restaurantelist.service";

@Component({
  selector: "app-cartpage",
  templateUrl: "./cartpage.component.html",
  styleUrls: ["./cartpage.component.css"],
})
export class CartpageComponent implements OnInit {
  constructor(private RestaurantelistService: RestaurantelistService) {}

  ngOnInit() {this.findItensCart()}

  foodList = [];

  findItensCart() {
    this.RestaurantelistService.buscarCarrinho(localStorage.getItem("USER")).then(
      (resultado) => {
        console.log(resultado);
        this.foodList.push(resultado);
      }
    );
  }
}
