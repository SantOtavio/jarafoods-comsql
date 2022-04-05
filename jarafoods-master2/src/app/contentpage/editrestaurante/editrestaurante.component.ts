import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "src/app/services/usuario.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-editrestaurante",
  templateUrl: "./editrestaurante.component.html",
  styleUrls: ["./editrestaurante.component.css"],
})
export class EditrestauranteComponent implements OnInit {
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {}

  email = "";
  password = "";

  submitFetch() {
    this.usuarioService
      .buscarUsuariosRestaurante()
      .then((resultado) => {
        console.log(resultado);
        if (localStorage.getItem("USER") == resultado[0].EMAIL) {
          this.router.navigate(["editrestaurantemain"]);
          localStorage.setItem("ID", resultado[0].ID);
        } else {
          console.log("deu errado :9");
        }
      });
  }
}

