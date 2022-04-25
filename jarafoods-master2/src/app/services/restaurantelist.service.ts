import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantelistService {

  constructor() { }


  buscarRestaurante() {
    return new Promise((resolvido, rejeitado) => {
      fetch("/api/buscarRestaurante", {
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

  buscarComidas(id) {
    return new Promise((resolvido, rejeitado) => {
      fetch("/api/buscarComidas", {
        method: "POST",
        body: JSON.stringify({
          id
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

  inserirCarrinho(emailUser , idFood , idRestaurante , nomecomida , precocomida) {
    return new Promise((resolvido, rejeitado) => {
      fetch("/api/inserir_carrinho", {
        method: "POST",
        body: JSON.stringify({
          emailUser,
          idFood,
          idRestaurante,
          nomecomida,
          precocomida
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

  buscarCarrinho(email) {
    return new Promise((resolvido, rejeitado) => {
      fetch("/api/buscarCarrinho", {
        method: "POST",
        body: JSON.stringify({
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

  limparCarrinho(email) {
    return new Promise((resolvido, rejeitado) => {
      fetch("/api/limparCarrinho", {
        method: "POST",
        body: JSON.stringify({
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
