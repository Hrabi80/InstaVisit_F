import { Component, OnInit,Renderer2, ElementRef, HostListener } from '@angular/core';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  sticky: boolean = false;
  menuPosition: any;
  menuElement: any;

ngAfterViewInit(){
    this.menuPosition = this.menuElement.nativeElement.offsetTop
}
  constructor(private renderer: Renderer2, private el: ElementRef) { }
  panelOpenState = false;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
        const windowScroll = window.pageYOffset;
        if(windowScroll >= this.menuPosition){
            this.sticky = true;
        } else {
            this.sticky = false;
        }
    }


    show(event) {
      console.log("ddd");
    setTimeout(()=>{
      event.srcElement.classList.dropdown();
    },0)
    }

}
