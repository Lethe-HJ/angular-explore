import { Directive, OnInit, OnDestroy } from '@angular/core';

@Directive({selector: '[appSpy]'})
export class SpyDirective implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit()    { this.logIt(`onInit`); }

  ngOnDestroy() { this.logIt(`onDestroy`); }

  private logIt(msg: string) {
    console.warn(`Spy #${msg}`);
  }
}