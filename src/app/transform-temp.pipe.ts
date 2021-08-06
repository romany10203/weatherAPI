import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformTemp'
})
export class TransformTempPipe implements PipeTransform {
  str:string="";

  transform(value: number): unknown {
    value = value-273.15;
    this.str = value.toString();
    return value.toFixed(2);
  }
// (f-32)/1.8 = c
// k-273.15 = c
// ((k-273.15)*1.8)+32 = f
// 9/5=1.8
}
