import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editrestaurante',
  templateUrl: './editrestaurante.component.html',
  styleUrls: ['./editrestaurante.component.css']
})
export class EditrestauranteComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit() {
  }

  email = "";

  submitFetch() {
    this.usuarioService.buscarUsuarios().then((resultado: User[]) => {
      console.log(resultado)
      for (let i = 0; i < resultado.length; i++) {
        if (
          this.email == resultado[i].EMAIL
        ) {
          this.router.navigate(["editrestaurantemain"]);
          localStorage.setItem('RESTAURANTE', this.email)
        }
        else{
          console.log("deu errado :9")
        }
      }
    });
  }

}

interface User {
  EMAIL: string;
}

