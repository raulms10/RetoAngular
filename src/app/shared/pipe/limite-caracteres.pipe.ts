import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limiteCaracteres'
})
export class LimiteCaracteresPipe implements PipeTransform {

  transform(value: string, limite: number): string {
    return value.length > limite ? value.substring(0, limite)+ '...' :   value;
  }

}
