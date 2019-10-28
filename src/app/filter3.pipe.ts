import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter3'
})
export class Filter3Pipe implements PipeTransform {

  transform(FirOutput: any, max: any,label:any): any[] {
    if (!Array.isArray(FirOutput) || FirOutput.length === 0 || !max) { 
      return FirOutput;
    }
    console.log(max);
    return FirOutput.filter(e => (e[label] <= max ));
  }

}
