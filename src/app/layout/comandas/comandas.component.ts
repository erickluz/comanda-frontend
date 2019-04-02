import { Component, OnInit } from '@angular/core';
import { Comanda } from "../../shared/model/comanda.model";
import { COMANDAS } from '../comandas.mock';

@Component({
    selector: 'app-comandas',
    templateUrl: './comandas.component.html',
    styleUrls: ['./comandas.component.scss']
})
export class ComandasComponent implements OnInit {

    public comandas : Array<Comanda> = COMANDAS

    constructor() {}

    ngOnInit() {}
}
