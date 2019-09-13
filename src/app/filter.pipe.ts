import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(FirOutput: any, term: any, label:string): any[] {
    if (!term) return FirOutput;
    if (!FirOutput) return [];
    if (term == '' || term == null) return [];
	//	if (!value) return items;
    term = term.toLowerCase();
    return FirOutput.filter(e => e[label].toLowerCase().indexOf(term) > -1 );
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
