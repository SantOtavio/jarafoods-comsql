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

  email = ""
  password = ""

  loginArray = []

  submitFetch() {
    this.usuarioService
      .buscarUsuariosRestaurante()
      .then((resultado) => {
        this.loginArray.push(resultado)
        for(let i = 0; i < this.loginArray.length ; i++){
          if (localStorage.getItem("USER") == resultado[i].EMAIL) {
            localStorage.setItem("ID", resultado[i].ID);
            this.router.navigate(["editrestaurantemain"]);
          } else {
            console.log("deu errado :9");
          }
        }
      });
  }
}

