import { Pipe, PipeTransform } from '@angular/core';
import { Enterprise } from '../interfaces/enterprise-form';


@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(array: Enterprise[], pageSize: number, pageNumber: number): any[] {


    if (!array.length) return []

    pageSize = pageSize || 5;
    pageNumber = pageNumber || 1;
    --pageNumber;



    return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
  }

}
