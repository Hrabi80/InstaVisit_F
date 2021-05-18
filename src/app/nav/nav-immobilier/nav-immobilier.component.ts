import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-immobilier',
  templateUrl: './nav-immobilier.component.html',
  styleUrls: ['./nav-immobilier.component.css']
})
export class NavImmobilierComponent implements OnInit {
  sticky: boolean = false;
  menuPosition: any;
  menuElement: any;
  ngAfterViewInit(){
    this.menuPosition = this.menuElement.nativeElement.offsetTop
}
  constructor() { }
  @HostListener('window:scroll', ['$event'])
  handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.menuPosition){
          this.sticky = true;
      } else {
          this.sticky = false;
      }
  }

  ngOnInit() {
  }

}
