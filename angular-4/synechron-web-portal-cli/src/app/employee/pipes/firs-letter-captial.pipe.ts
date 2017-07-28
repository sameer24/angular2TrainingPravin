import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firsLetterCaptial'
})
export class FirsLetterCaptialPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
