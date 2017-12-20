import {
  Pipe,
  PipeTransform
} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatTime'
})
export class FormatDatePipe implements PipeTransform {
  transform(date: any, typeFormat?: string): string {
    return moment(date).format(typeFormat);
  }
}
