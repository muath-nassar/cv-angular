import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss']
})
export class DurationComponent implements OnInit {
  @Input()
  institution="";
  @Input()
  city="";
  @Input()
  from="";
  @Input()
  to="";
  @Input()
  title = "";
  @Input()
  description ="";

  @Input()
  borderColor = "";

  @Input()
  hidden = true;

  @Input()
  link="";

  constructor() { }

  ngOnInit(): void {
  }

}
