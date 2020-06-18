import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  
  // Input permet a un composant de recevoir de la donnée de son parent
  // je recupere une data depuis mon parent component
  @Input() public compteur : number;

  // Output permet a un composent d'envoyer de la donnée, ou un evenement style fonction, vers son parent
  // j'instancie un event que recuperas mon parent component avec EventEmitter
  @Output() public eventImit: EventEmitter<number> = new EventEmitter();


  // les fonctions increment et decrement qui on pour pour but de changer la valeur de compteur et d'emit l'evenement vers le parent
  increment() {
    this.compteur++
    this.eventImit.emit(this.compteur)
  }

  decrement() {
    this.compteur--;
    this.eventImit.emit(this.compteur);
  }

  constructor() { }

  ngOnInit() {
  }
}
