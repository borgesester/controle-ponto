import { Pipe, PipeTransform } from '@angular/core';
import { Type } from '../models';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(type: Type, ...args: unknown[]): unknown {
    return this.getText(type)
  }

  getText(type: Type): string {
    let typeDesc: string;
    switch(type) {
      case Type.ENTRY_WORK:
        typeDesc = 'Início do Trabalho'
        break;
      case Type.ENTRY_LUNCH:
        typeDesc = 'Início do Almoço'
        break;
      case Type.EXIT_LUNCH:
        typeDesc = 'Término do Almoço'
        break
      case Type.EXIT_WORK:
        typeDesc = 'Término do Trabalho'
        break;
      default:
        typeDesc = type;
        break;

    }
    return typeDesc
  }

}
