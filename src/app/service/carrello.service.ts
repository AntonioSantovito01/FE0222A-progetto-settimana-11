import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Articoli } from '../interface/phone';
@Injectable({
  providedIn: 'root'
})
export class CarrelloService {


  public carrello: Articoli[] = [];
  private contatore = new BehaviorSubject(0);
  aggiornato = this.contatore.asObservable();


  constructor() { }

  aggiungiCarello(ele: Articoli) {
    this.carrello.push(ele);
    this.contatore.next(this.carrello.length);
  }

  cancellaDaCarello() {
    this.carrello = [];
    this.contatore.next(this.carrello.length);
  }

  getCarrello() {
    return this.carrello;
  }


}
