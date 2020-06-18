import { Component, OnInit, Input, Output } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  // j'init la varial compteur a 0
  public compteur : number = 0;

  // function qui recupere l'action d'un evenement depuis le child component
  compteurChangeHandler(val: number) {
    this.compteur = val;
  }

  constructor() { }

  ngOnInit() {
  }

}
