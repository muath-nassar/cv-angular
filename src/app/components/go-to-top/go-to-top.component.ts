import {Component, HostListener, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-go-to-top',
  templateUrl: './go-to-top.component.html',
  styleUrls: ['./go-to-top.component.scss']
})
export class GoToTopComponent implements OnInit {
  isScrolled = false;

  constructor() { }

  ngOnInit(): void {


  }

  goToTop(){
    window.scrollTo({
      top: 0,
      behavior : "smooth"
    })
  }

// @HostListener('scroll', ['$event']) // for scroll events of the current element
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    this.isScrolled = window.scrollY > 400
    console.log(window.scrollY)
  }

}
