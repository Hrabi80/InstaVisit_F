import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

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
  constructor() { }
  
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

}
