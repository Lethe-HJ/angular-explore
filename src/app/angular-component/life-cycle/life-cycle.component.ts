import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.sass']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  changeLog: string[] = [];
  surname: string;
  htmlChangeLog: { title: string, children: string[] }[] = [];
  // 属性与方法最先被定义
  constructor() {
    console.log('父组件\t\t\t\t子组件')
    this.log('declaration\n');
    this.log('constructor');
  }

  log(str) {
    console.log(`${str.replace(/\n/g, '\n\t')}`);
    this.changeLog.push(str);
    const strLi = str.split('\n');
    this.htmlChangeLog.push({ title: strLi[0], children: strLi.slice(1) })
  }

  ngOnChanges() {
    this.log('ngOnChanges'); // 因为组件没有input输入属性 所以不会调用ngOnChanges
  }

  // 在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后 用于初始化指令/组件
  // 时机 在第一轮 ngOnChanges() 完成之后调用
  ngOnInit(): void {
    this.surname = 'h';
    this.log(`ngOnInit\nsurname:${this.surname}`)
  }

  // 检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应
  // 时机 ngOnInit或ngOnChanges之后
  ngDoCheck() {
    this.log(`ngDoCheck\nsurname:${this.surname}`);
  }

  // 当 Angular 把外部内容投射进组件视图或指令所在的视图之后调用
  // 时机 第一次 ngDoCheck() 之后
  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  // 每当 Angular 检查完被投射到组件或指令中的内容之后调用
  // ngAfterContentInit() 和每次 ngDoCheck() 之后调用
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked')
  }

  // 当 Angular 初始化完组件视图及其子视图或包含该指令的视图之后调用
  // 第一次 ngAfterContentChecked() 之后调用
  ngAfterViewInit() {
    this.log('ngAfterViewInit')
  }

  // 每当 Angular 做完组件视图和子视图或包含该指令的视图的变更检测之后调用。
  // ngAfterViewInit() 和每次 ngAfterContentChecked() 之后调用
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked...')
  }
}


/*
  序号      父组件                  子组件                    发生的变化
+--------+-----------------------+-----------------------+----------------------------------------+
| order  | father                | son                   | change                                 |
+--------+-----------------------+-----------------------+----------------------------------------+
| 1      | declaration           |                       |                                        | 定义组件类的属性与方法
| 2      | constructor           |                       |                                        | 构造函数
| 3      |                       | declaration           |                                        | 
| 4      |                       | constructor           |                                        |
| 5      | ngOnInit              |                       | surname:h                              | 这里执行了this.surname = 'h';
| 6      | ngDoCheck             |                       |                                        | 变更检测
| 7      | ngAfterContentInit    |                       |                                        | 把外部内容投射进组件视图或指令所在的视图之后调用
| 8      | ngAfterContentChecked |                       |                                        | 检查完被投射到组件或指令中的内容之后调用。
| 9      |                       | ngOnChanges           | input attribute surname:undefined->"h" | 设置或重新设置数据绑定的输入属性时响应
| 10     |                       | ngOnInit              | username:'x'                           | 这里执行了this.surname = 'x';
| 11     |                       | ngDoCheck             |                                        | 
| 13     |                       | ngAfterContentInit    |                                        |
| 14     |                       | ngAfterContentChecked |                                        |
| 15     | ngAfterViewInit       |                       |                                        | 初始化完组件视图及其子视图或包含该指令的视图之后调用
| 16     | ngAfterViewChecked    |                       |                                        | 做完组件视图和子视图或包含该指令的视图的变更检测之后调用
| 17     | ngDoCheck             |                       |                                        |
| 18     | ngAfterContentChecked |                       |                                        |
| 19     |                       | ngDoCheck             | username:'x'                           |
| 20     |                       | ngAfterContentChecked |                                        |
| 21     | ngAfterViewChecked    |                       |                                        |
+--------+-----------------------+-----------------------+----------------------------------------+

操作 username输入框增加j

  序号      父组件                  子组件                    发生的变化
+--------+-----------------------+-----------------------+----------------------------------------+
| order  | father                | son                   | change                                 |
+--------+-----------------------+-----------------------+----------------------------------------+
| 22     | ngDoCheck             |                       | surname:hj                             |
| 23     | ngAfterContentChecked |                       |                                        |
| 24     |                       | ngOnChanges           | input attribute surname:"h"->"hj"      |
| 25     |                       | ngDoCheck             |                                        |
| 26     |                       | ngAfterContentChecked |                                        |
| 27     | ngAfterViewChecked    |                       |                                        |
+--------+-----------------------+-----------------------+----------------------------------------+

操作 username输入框失去焦点

  序号      父组件                  子组件                    发生的变化
+--------+-----------------------+-----------------------+----------------------------------------+
| order  | father                | son                   | change                                 |
+--------+-----------------------+-----------------------+----------------------------------------+
| 28     | ngDoCheck             |                       |                                        |
| 29     | ngAfterContentChecked |                       |                                        |
| 30     |                       | ngDoCheck             |                                        |
| 31     |                       | ngAfterContentChecked |                                        |
| 32     | ngAfterViewChecked    |                       |                                        |
+--------+-----------------------+-----------------------+----------------------------------------+

*/