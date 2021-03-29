import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { HooksComponent } from './life-cycle/hooks/hooks.component'
import { PaternityInitComponent } from './life-cycle/paternity-init/paternity-init.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'lifecycle', pathMatch: 'full' },
            { path: 'paternity-init', component: PaternityInitComponent },
            { path: 'lifecycle', component: LifeCycleComponent },
            { path: 'hooks', component: HooksComponent },
        ]
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AngularComponentRoutingModule { }
