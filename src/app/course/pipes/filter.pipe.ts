import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allcourses:any[],searchTerm:string,propertyName:string): any[] {
    
    const result:any = []
    if(!allcourses || searchTerm=="" || propertyName=="" )
    {
      return allcourses
    }
    allcourses.forEach((item:any)=>{
      if(item[propertyName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase()) )
      {
        result.push(item)
      }
    })
    return result

  }

}
