import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
@Component({
  selector: 'app-nav-culture',
  templateUrl: './nav-culture.component.html',
  styleUrls: ['./nav-culture.component.css']
})
export class NavCultureComponent implements OnInit {
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
