import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { ViewportScroller } from '@angular/common';

declare const infixToPrefix: any;
declare const infixToPostfix: any;
declare const tokenize: any;
declare const postfixToInfix: any;
declare const postfixToPrefix: any;


@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  homeIcon = faHome;

  infix_InPr:string;
  resultat_InPr:string;

  infix_InPo:string;
  resultat_InPo:string;

  postfix_PoIn:string;
  resultat_PoIn:string;

  postfix_PoPr:string;
  resultat_PoPr:string;

  constructor(private viewportScroller: ViewportScroller) { 
  }

  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }

  

  ngOnInit(): void {}


  onSubmitInPr(){
    this.resultat_InPr = infixToPrefix(this.infix_InPr);
  }

  onSubmitInPo(){
    this.resultat_InPo = infixToPostfix(tokenize(this.infix_InPo));
  }

  onSubmitPoIn(){
    this.resultat_PoIn = postfixToInfix(this.postfix_PoIn);
  }

  onSubmitPoPr(){
    this.resultat_PoPr = postfixToPrefix(this.postfix_PoPr);
  }

}