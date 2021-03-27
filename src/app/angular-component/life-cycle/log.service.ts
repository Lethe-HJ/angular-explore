import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  index: number = 1;

  setSpy(that, name, keys){
    keys.forEach(key => {
      let val = that[key];
      Object.defineProperty(that, key, {
        configurable: false,
        get() {
          return val
        },
        set(newVal) {
          console.warn(`[变化]: ${name}.${key}: '${val}'=>'${newVal}'`)
          if (val !== newVal) {
            val = newVal
          }
        }
      })
    })
  }
  log(msg) {
    console.log(`${('0' + this.index).substr(-2)}.${msg}`);
    this.index += 1;
  }

  actLog(msg){
    console.warn('[操作]: ' + msg);
  }

}