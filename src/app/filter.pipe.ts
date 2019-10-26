import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(FirOutput: any, term: any,  label:string): any[] {
    
    if (!term) return FirOutput;
    if (!FirOutput) return [];
    if (term == '' || term == null) return [];
    term = term.toLowerCase();
    return FirOutput.filter(e => JSON.stringify(e[label]).toLowerCase().indexOf(term) > -1 );
  
  //	if (!value) return items;
     
    /* return FirOutput.filter( item => {
          for (let prop in item) {
            if (typeof item[prop] === "string" && item[prop].indexOf(term) > -1) {
              return true;
            }
          }
          return false;
        });*/
       
        
        
  }

}
