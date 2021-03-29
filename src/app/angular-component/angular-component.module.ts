import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularComponentRoutingModule } from './angular-component-routing.module';
import { SubComponent } from './life-cycle/component/sub/sub.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { SpyDirective } from './life-cycle/direct/spy.directive';
import { LogService } from './life-cycle/log.service';
@NgModule({
  declarations: [SubComponent, LifeCycleComponent, SpyDirective], // 组件需要先声明
  imports: [ // 模块内部的组件需要依赖的外部模块 需要先导入
    CommonModule,
    FormsModule,
    AngularComponentRoutingModule,
  ],
  providers:[
    LogService
  ],
})
export class AngularComponentModule { }
