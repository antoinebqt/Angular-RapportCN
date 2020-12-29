import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expression-arithmetique',
  templateUrl: './expression-arithmetique.component.html',
  styleUrls: ['./expression-arithmetique.component.css']
})
export class ExpressionArithmetiqueComponent implements OnInit {

  homeIcon = faHome;
  constructor() { }


  ngOnInit(): void {
  }

}
