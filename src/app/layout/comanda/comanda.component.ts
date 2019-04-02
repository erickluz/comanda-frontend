import { Component, OnInit } from '@angular/core';
import { Comanda } from 'src/app/shared/model/comanda.model';
import { COMANDA } from '../comandas.mock';
import { ItemComanda } from 'src/app/shared/model/itemComanda.model';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.scss']
})
export class ComandaComponent implements OnInit {

  public comanda : Comanda = COMANDA
  public itensComanda : Array<ItemComanda> = COMANDA.itensComanda

  constructor() { }

  ngOnInit() {
  }

}
