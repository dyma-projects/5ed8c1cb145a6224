import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;

  // recupere l'element inputValue
  @ViewChild("inputValue") el : ElementRef;

  // fonction qui change la valeur de 'valeur' grave a ViewChild
  changeInputValue() {
    this.valeur = this.el.nativeElement.value
  }

  constructor() { }

  ngOnInit() {
  }
}
