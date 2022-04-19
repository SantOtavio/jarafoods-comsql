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

  inserirCarrinho(emailUser , idFood , idRestaurante) {
    return new Promise((resolvido, rejeitado) => {
      fetch("/api/inserir_carrinho", {
        method: "POST",
        body: JSON.stringify({
          emailUser,
          idFood,
          idRestaurante
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
