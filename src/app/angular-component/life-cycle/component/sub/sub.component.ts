import { Component, Input, OnInit, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.sass']
})
export class SubComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  @Input() surname: string;
  changeLog: string[] = [];
  htmlChangeLog: { title: string, children: string[] }[] = [];
  username: string = '';
  // 属性与方法最先被定义
  constructor() {
    this.log('declaration\n');
    this.log('constructor');
  }

  log(str) {
    console.log(`\t\t\t\t\t${str}\t\tusername='${this.username}'`);
  }

  // 当 Angular 设置或重新设置数据绑定的输入属性时响应
  // 时机 ngOnInit之前 或 输入属性的值发生变化后 如果没有输入属性 则不调用这个方法
  ngOnChanges(changes: SimpleChanges) {
    const changesRecord = []
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      changesRecord.push(`输入属性${propName}: ${prev} --> ${cur}`);
    }
    this.log('ngOnChanges'); // 因为组件没有input输入属性 所以不会调用ngOnChanges
  }

  // 在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后 用于初始化指令/组件
  // 时机 在第一轮 ngOnChanges() 完成之后调用
  ngOnInit(): void {
    this.log('ngOnInit')
    this.username = 'x';
  }

  // 检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应
  // 时机 ngOnInit或ngOnChanges之后
  ngDoCheck() {
    this.log('ngDoCheck');
  }

  // 当 Angular 把外部内容投影进组件视图或指令所在的视图之后调用
  // 时机 第一次 ngDoCheck() 之后
  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    this.log('ngAfterContentChecked')
  }
}
