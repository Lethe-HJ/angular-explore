import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubComponent } from './life-cycle/component/sub/sub.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

@NgModule({
  declarations: [SubComponent, LifeCycleComponent], // 组件需要先声明
  imports: [ // 模块内部的组件需要依赖的外部模块 需要先导入
    CommonModule,
    FormsModule,
  ],
  exports: [
    LifeCycleComponent // 需要在模块外部调用的组件需要导出
  ]
})
export class AngularComponentModule { }
