import { Component, Input, Output, EventEmitter, OnInit, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { LogService } from '../../log.service';
@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() surname: string;
  @Output() usernameChange = new EventEmitter<string>();
  username: string = '';
  fullname: string = '';
  // 属性与方法最先被定义
  constructor(private logService: LogService) {
    this.log('constructor');
    this.logService.setSpy(this, 'sub', [
      'surname',
      'username',
      'fullname',
    ])
  }

  log(str) {
    const spaceStr = '                        ';
    const msgModel = `${spaceStr}${str}`;
    this.logService.log(msgModel);
  }

  onUsernameInput($event) {
    this.logService.actLog('子组件输入框输入' + $event.target.value)
    this.usernameChange.emit($event.target.value);
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
    this.fullname = this.surname + this.username;
  }

  // 在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后 用于初始化指令/组件
  // 时机 在第一轮 ngOnChanges() 完成之后调用
  ngOnInit(): void {
    this.log('ngOnInit')
    // this.logService.actLog('给username赋值"jin"');
    // this.username = 'jin';
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

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  // 每当 Angular 做完组件视图和子视图或包含该指令的视图的变更检测之后调用。
  // ngAfterViewInit() 和每次 ngAfterContentChecked() 之后调用
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }
}


