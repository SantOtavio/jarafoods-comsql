import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  constructor() {}

  buscarUsuarios() {
    return new Promise((resolvido, rejeitado) => {
      fetch("/api/buscar_usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resultado) => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    });
  }

  buscarUsuariosRestaurante() {
    return new Promise((resolvido, rejeitado) => {
      fetch("/api/buscar_usuario_restaurante", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resultado) => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    });
  }

  cadastrarUsuarios(nome, password, email) {
    return new Promise((resolvido, rejeitado) => {
      fetch("/api/criar_usuario", {
        method: "POST",
        body: JSON.stringify({
          nome,
          password,
          email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resultado) => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    });
  }

  cadastrarRestaurante(nome, precodelievery, tipocomida, email) {
    return new Promise((resolvido, rejeitado) => {
      fetch("/api/cadastro_restaurante", {
        method: "POST",
        body: JSON.stringify({
          nome,
          precodelievery,
          tipocomida,
          email
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resultado) => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    });
  }
}
