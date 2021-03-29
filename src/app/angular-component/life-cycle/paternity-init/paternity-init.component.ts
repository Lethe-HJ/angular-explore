import { Component, Input, Output, EventEmitter, OnInit, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { LogService } from '../../life-cycle/log.service';
@Component({
  selector: 'app-paternity-init',
  templateUrl: './paternity-init.component.html',
  styleUrls: ['./paternity-init.component.scss']
})
export class PaternityInitComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  constructor(private logService: LogService) {
    console.log('父组件\t\t\t\t\t\t子组件');
  }

  log(str) {
    const logModel = str;
    this.logService.log(logModel);
  }

  ngOnChanges(changes: SimpleChanges) {

    this.log('ngOnChanges'); // 因为组件没有input输入属性 所以不会调用ngOnChanges
  }

  ngOnInit(): void {
    this.log('ngOnInit')
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }
}
