import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';
import { SubComponent } from './component/sub/sub.component';
import { LogService } from './log.service';
@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.sass']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  surname: string = '';
  username: string = '';
  fullname: string = '';
  testname: string = '';
  timer: null | ReturnType<typeof setTimeout> = null;
  // 属性与方法最先被定义

  @ViewChild(SubComponent) viewChild: SubComponent;

  constructor(private logService: LogService) {
    console.log('父组件\t\t\t\t\t\t子组件')
    this.log('constructor');
    this.logService.setSpy(this, 'life', [
      'surname',
      'username',
      'fullname',
    ])
  }

  log(str) {
    const logModel = str;
    this.logService.log(logModel);
  }

  onInput($event) {
    this.logService.actLog('父组件输入框追加输入了' + $event.data)
  }

  onBlur($event) {
    this.logService.actLog('父组件输入框失去焦点')
  }

  onSubUsernameChange(value: string) {
    this.username = value;
  }

  ngOnChanges() {
    this.log('ngOnChanges'); // 因为组件没有input输入属性 所以不会调用ngOnChanges
  }

  // 在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后 用于初始化指令/组件
  // 时机 在第一轮 ngOnChanges() 完成之后调用
  ngOnInit(): void {
    this.log(`ngOnInit`)
    this.logService.actLog('给surname赋值"x"');
    this.surname = 'h';
  }

  // 检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应
  // 时机 ngOnInit或ngOnChanges之后
  ngDoCheck() {
    this.log(`ngDoCheck`);
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
    this.log('ngAfterViewChecked');
    if (this.fullname !== this.viewChild.fullname) {
      this.testname = 'hahah'; // 这个赋值不会抛出异常 因为this.testname 不会影响视图
      if (!this.timer) this.timer = setTimeout(() => {
        this.timer = null;
        this.logService.actLog('this.fullname = this.viewChild.fullname')
        this.fullname = this.viewChild.fullname;
      }, 0);
    }
  }
}

