import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cadastrorestaurante",
  templateUrl: "./cadastrorestaurante.component.html",
  styleUrls: ["./cadastrorestaurante.component.css"],
})
export class CadastrorestauranteComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
