import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'lifecycle', pathMatch: 'full' },
            { path: 'lifecycle', component: LifeCycleComponent },
        ]
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AngularComponentRoutingModule { }
