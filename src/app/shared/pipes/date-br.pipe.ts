import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateBr'
})
export class DateBrPipe implements PipeTransform {

  transform(date: string, ...args: unknown[]): unknown {
    return moment(date).format('DD/MM/YYYY HH:mm:ss');
  }

}
