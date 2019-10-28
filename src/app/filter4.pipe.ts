import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter4'
})
export class Filter4Pipe implements PipeTransform {

  transform(FirOutput: any, min: any,label:any): any[] {
    if (!Array.isArray(FirOutput) || FirOutput.length === 0 || !min) { 
      return FirOutput;
    }
    console.log(min);
    return FirOutput.filter(e => (e[label] >= min ));
  }

}
