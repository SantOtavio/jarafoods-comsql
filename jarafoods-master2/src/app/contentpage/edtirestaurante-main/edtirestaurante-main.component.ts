import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: "app-edtirestaurante-main",
  templateUrl: "./edtirestaurante-main.component.html",
  styleUrls: ["./edtirestaurante-main.component.css"],
})
export class EdtirestauranteMainComponent implements OnInit {
  constructor(private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.verifRest();
  }

  verifRest() {
    if (!localStorage.getItem("RESTAURANTE")) {
      this.router.navigate(["listrestaurante"]);
    }
  }

  foodImageURL;
  restaurantImageURL;
  imgarray = [];

  foodImage(event) {
    const file = new FileReader();
    file.onload = (e) => {
      this.foodImageURL = e.target.result;
    };
    file.readAsDataURL(event.target.files[0]);
  }

  restaurantImage(event) {
    const file = new FileReader();
    file.onload = (e) => {
      this.restaurantImageURL = e.target.result;
    };
    file.readAsDataURL(event.target.files[0]);
  }

  preco = "";
  nomeComida = "";

  confirmIMG() {
    this.imgarray.push({
      image: this.foodImageURL,
      preco: this.preco,
      nomeComida: this.nomeComida,
    });
    console.log(this.imgarray);
  }

  confirmEdition() {
    for(let i = 0; i < this.imgarray.length ; i++){
      this.usuarioService.enviarImagem(this.imgarray[i].nomeComida, this.imgarray[i].preco, this.imgarray[i].foodImageURL, localStorage.getItem("ID"));
    }
  }

}
