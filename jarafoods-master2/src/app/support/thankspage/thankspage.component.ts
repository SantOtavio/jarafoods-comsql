import { Component, OnInit } from '@angular/core';
import { Route, Router } from "@angular/router";

@Component({
  selector: 'app-thankspage',
  templateUrl: './thankspage.component.html',
  styleUrls: ['./thankspage.component.css']
})
export class ThankspageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.redirect()
  }

  timeLeft: number = 5;
  interval;

  redirect(){
    setInterval(() => {
      this.router.navigate(["/loginuser"])
    }, 7000)
  }
}
