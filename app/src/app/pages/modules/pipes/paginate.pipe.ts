import { Pipe, PipeTransform } from '@angular/core';
import { ModuleForm } from '../interfaces/module-form';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(array: ModuleForm[], pageSize: number, pageNumber: number): any[] {


    if (!array.length) return []

    pageSize = pageSize || 5;
    pageNumber = pageNumber || 1;
    --pageNumber;

    return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
  }

}
