import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-field',
  templateUrl: './progress-field.component.html',
  styleUrls: ['./progress-field.component.scss']
})
export class ProgressFieldComponent implements OnInit {
  @Input() skill= "";
  @Input() progress= "";

  constructor() { }

  ngOnInit(): void {
  }

}
