import { Cliente } from "./cliente.model";
import { Garcom } from "./garcom.model";
import { ItemComanda } from "./itemComanda.model";

export class Comanda{
    id : number
    cliente : Cliente
    data : String
    mesa : number
    garcom : Garcom
    itensComanda : Array<ItemComanda>
}