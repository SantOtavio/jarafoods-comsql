import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-finished',
  templateUrl: './order-finished.component.html',
  styleUrls: ['./order-finished.component.css']
})
export class OrderFinishedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  anotherOrder(){
    this.router.navigate(["listrestaurante"])
  }

}
