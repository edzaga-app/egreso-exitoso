import { Pipe, PipeTransform } from '@angular/core';
import { InformationSystems } from '../interfaces/information-systems';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(array: InformationSystems[], pageSize: number , pageNumber: number): any[] {


    if(!array.length) return []

    pageSize = pageSize || 5;
    pageNumber = pageNumber || 1;
    --pageNumber;

    return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize );
  }

}
