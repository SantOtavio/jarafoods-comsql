import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-listarestaurante",
  templateUrl: "./listarestaurante.component.html",
  styleUrls: ["./listarestaurante.component.css"],
})
export class ListarestauranteComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('USER');
    this.router.navigate(["/"]);
  }
}
