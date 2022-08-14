import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss']
})
export class SkillBarComponent implements OnInit, OnChanges {
  @Input() testfield = ""

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
        console.log("TEST FIELD = "+this.testfield)
    }
  ngOnInit(): void {

  }

  doTest() {
    this.testfield = "Now modified"
  }

}
