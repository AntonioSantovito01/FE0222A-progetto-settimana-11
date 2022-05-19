import { Component, OnInit } from '@angular/core';
import { Articoli } from '../interface/phone';
import { articoliService } from '../service/articoli.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CarrelloService } from '../service/carrello.service';
@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss']
})
export class DettaglioComponent implements OnInit {

  prodotti: Articoli | undefined;
  products: Articoli[] | undefined;


  constructor(private articoli: articoliService, private router: ActivatedRoute, private carelloSrv: CarrelloService) { }

  ngOnInit(): void {

    this.router.params.subscribe((params: Params) => {
      const id = +params['id'];
      this.articoli.getSingleProduct(id).subscribe(product => {
        this.prodotti = product;
      })
    })
  }

  aggiungiElementoCarello(ele: Articoli, $event: any) {
    $event.preventDefault();
    this.carelloSrv.aggiungiCarello(ele);

  }




}
