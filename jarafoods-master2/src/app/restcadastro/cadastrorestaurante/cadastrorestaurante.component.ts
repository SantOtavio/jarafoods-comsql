import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: "app-cadastrorestaurante",
  templateUrl: "./cadastrorestaurante.component.html",
  styleUrls: ["./cadastrorestaurante.component.css"],
})
export class CadastrorestauranteComponent implements OnInit {
  // @Output() newItemEvent = new EventEmitter<string>();

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit() {}

  nome = "";
  precoDelievery = "";
  tipocomida = "";
  email = "";

  submitRegister() {
    this.usuarioService.cadastrarRestaurante(
      this.nome,
      this.precoDelievery,
      this.tipocomida,
      this.restimageurl,
      this.email
    );
    this.router.navigate([""])
  }

  restimageurl;

  foodImage(event) {
    const file = new FileReader();
    file.onload = (e) => {
      this.restimageurl = e.target.result;
    };
    file.readAsDataURL(event.target.files[0]);
  }

  // imageURL;
  // imgarray = []

  // mostrarImagem(event) {
  //   const file = new FileReader();
  //   file.onload = (e) => {
  //     this.imageURL = e.target.result;
  //   };
  //   file.readAsDataURL(event.target.files[0]);
  // }

  // confirmIMG() {
  //   this.imgarray.push(this.imageURL);
  //   console.log(this.imgarray[0])
  // }
}
