import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edtirestaurante-main',
  templateUrl: './edtirestaurante-main.component.html',
  styleUrls: ['./edtirestaurante-main.component.css']
})
export class EdtirestauranteMainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.verifRest()
  }

  verifRest(){
    if(!localStorage.getItem('RESTAURANTE')){
      this.router.navigate(["listrestaurante"])
    }
  }

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
