import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MenuComponent } from './menu/menu.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { MailOutline, MenuFoldOutline, MenuUnfoldOutline, AppstoreOutline } from '@ant-design/icons-angular/icons';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
 
const icons: IconDefinition[] = [MailOutline, MenuFoldOutline, MenuUnfoldOutline, AppstoreOutline];

@NgModule({
  declarations: [
    MenuComponent,
    BaseLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzMenuModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule.forRoot(icons)
  ],
  exports: [BaseLayoutComponent]
})
export class LayoutModule { }
