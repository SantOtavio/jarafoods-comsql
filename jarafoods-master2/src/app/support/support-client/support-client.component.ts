import { Component, OnInit } from '@angular/core';
import { Route, Router } from "@angular/router";

@Component({
  selector: 'app-support-client',
  templateUrl: './support-client.component.html',
  styleUrls: ['./support-client.component.css']
})
export class SupportClientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectSignin(){
    this.router.navigate(["/loginuser"])
  }

  thankspage(){
    this.router.navigate(["/thankspage"])
  }

}
