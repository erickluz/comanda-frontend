import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComandaRoutingModule } from './comanda-routing.module';
import { ComandaComponent } from './comanda.component';
import { StatModule } from '../../shared';
@NgModule({
    imports: [CommonModule, ComandaRoutingModule, StatModule],
    declarations: [ComandaComponent]
})
export class ComandaModule {}
