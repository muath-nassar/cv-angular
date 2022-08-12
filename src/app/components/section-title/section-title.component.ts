import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {

  @Input()
  color = "";

  @Input()
  title = ""

  @Input()
  icon = ""

  constructor() { }

  ngOnInit(): void {
  }

}
