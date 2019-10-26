import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(FirOutput: any, ref: any,field:any,label:string): any[] {
    if (!ref) return FirOutput;
    if (!FirOutput) return [];
    if (ref == '' || ref == null) return [];
    ref = ref.toLowerCase();
    return FirOutput.filter(function(item){
      return JSON.stringify(item[label]).toLowerCase().indexOf(ref) > -1;
  });
   // return FirOutput.filter(e => e[label].toLowerCase().indexOf(ref) > -1 );
     // if(!args)return ref;
 /*
    return FirOutput.filter( str => {
      return str[field].JSON.stringify(str[field]).toLowerCase().includes(ref.toLowerCase());
    });
  
 */
  }

}
