import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComandasRoutingModule } from './comandas-routing.module';
import { ComandasComponent } from './comandas.component';
import { StatModule } from '../../shared';
@NgModule({
    imports: [CommonModule, ComandasRoutingModule, StatModule],
    declarations: [ComandasComponent]
})
export class ComandasModule {}
