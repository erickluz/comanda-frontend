import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComandasComponent } from './comandas.component';

const routes: Routes = [
    {
        path: '',
        component: ComandasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComandasRoutingModule {}
