import { Component, OnInit } from '@angular/core';
import { Articoli } from '../interface/phone';
import { articoliService } from '../service/articoli.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  prodotti: Articoli[] | undefined;


  constructor(private articoli: articoliService) {


  }

  ngOnInit(): void {

    this.articoli.getProducts().subscribe(cards => {
      this.prodotti = cards;
    }, (err) => {
      console.log(err);
    })

  }

}
