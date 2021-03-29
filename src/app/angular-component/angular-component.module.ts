import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularComponentRoutingModule } from './angular-component-routing.module';
import { SubComponent } from './life-cycle/component/sub/sub.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LogService } from './life-cycle/log.service';
import {
  AfterContentParentComponent,
  AfterContentComponent,
  ChildComponent
} from './life-cycle/hooks/after-content.component';

import {
  AfterViewParentComponent,
  AfterViewComponent,
  ChildViewComponent
} from './life-cycle/hooks/after-view.component';

import {
  CounterParentComponent,
  MyCounterComponent
} from './life-cycle/hooks/counter.component';

import {
  DoCheckParentComponent,
  DoCheckComponent
} from './life-cycle/hooks/do-check.component';

import {
  OnChangesParentComponent,
  OnChangesComponent
} from './life-cycle/hooks/on-changes.component';

import { PeekABooParentComponent } from './life-cycle/hooks/peek-a-boo-parent.component';
import { PeekABooComponent } from './life-cycle/hooks/peek-a-boo.component';

import { SpyParentComponent } from './life-cycle/hooks/spy.component';
import { SpyDirective } from './life-cycle/hooks/spy.directive';
import { HooksComponent } from './life-cycle/hooks/hooks.component';
import { PaternityInitComponent } from './life-cycle/paternity-init/paternity-init.component';
import { SonComponent } from './life-cycle/paternity-init/son/son.component';

@NgModule({
  declarations: [
    SubComponent,
    LifeCycleComponent,
    SpyDirective,
    HooksComponent,
    AfterContentParentComponent,
    AfterContentComponent,
    ChildComponent,
    AfterViewParentComponent,
    AfterViewComponent,
    ChildViewComponent,
    CounterParentComponent,
    MyCounterComponent,
    DoCheckParentComponent,
    DoCheckComponent,
    OnChangesParentComponent,
    OnChangesComponent,
    PeekABooParentComponent,
    PeekABooComponent,
    SpyParentComponent,
    SpyDirective,
    PaternityInitComponent,
    SonComponent], // 组件需要先声明
  imports: [ // 模块内部的组件需要依赖的外部模块 需要先导入
    CommonModule,
    FormsModule,
    AngularComponentRoutingModule,
  ],
  providers: [
    LogService
  ],
})
export class AngularComponentModule { }
