import { Component, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";



@Component({
  selector: "app-cadastrorestaurante",
  templateUrl: "./cadastrorestaurante.component.html",
  styleUrls: ["./cadastrorestaurante.component.css"],
})
export class CadastrorestauranteComponent implements OnInit {


  @Output() newItemEvent = new EventEmitter<string>();


  constructor(private router: Router) {}

  ngOnInit() {}

  imageURL;
  imgarray = []

  mostrarImagem(event) {
    const file = new FileReader();
    file.onload = (e) => {
      this.imageURL = e.target.result;
    };
    file.readAsDataURL(event.target.files[0]);
  }


  confirmIMG() {
    this.imgarray.push(this.imageURL);
    console.log(this.imgarray[0])
  }
}
