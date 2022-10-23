import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: number | null): unknown {
    return value ? Math.round(value * 100) / 100 : 0;
  }

}
