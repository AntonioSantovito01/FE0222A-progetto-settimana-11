import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Articoli } from '../interface/phone';
import { CarrelloService } from '../service/carrello.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  carrello: Articoli[] = [];
  totale: number = 0;
  myForm!: FormGroup;

  constructor(private carrelloSrv: CarrelloService, private form: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.form.group({
      email: ["", [Validators.required, Validators.email]],
      indirizzo: ["", [Validators.required, Validators.minLength(4)]]
    });
    this.carrello = this.carrelloSrv.getCarrello();
    this.totale = this.countTotal();
  }

  countTotal(): number {
    let count = 0;
    let elemento: Articoli;

    for (elemento of this.carrello) {
      count += elemento.price;
    }
    return count;
  }

  get email() {
    return this.myForm.get('email');
  }

  get indirizzo() {
    return this.myForm.get("indirizzo");
  }

  acquistaCarello(): any {
    this.carrello = [];
    this.carrelloSrv.cancellaDaCarello();
  }

}

