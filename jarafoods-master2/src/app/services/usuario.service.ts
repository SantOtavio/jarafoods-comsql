import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  constructor() {}

  buscarUsuarios(email , password) {
    return new Promise((resolvido, rejeitado) => {
      fetch("/api/buscar_usuario", {
        method: "POST",
        body: JSON.stringify({
          password,
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

  enviarImagem(nomeComida , preco , image , restaurantID) {
    return new Promise((resolvido, rejeitado) => {
      fetch("/api/inserir_comida", {
        method: "POST",
        body: JSON.stringify({
          nomeComida,
          preco,
          image,
          restaurantID
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
