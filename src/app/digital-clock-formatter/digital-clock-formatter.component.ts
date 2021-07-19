import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock-formatter',
  templateUrl: './digital-clock-formatter.component.html',
  styleUrls: ['./digital-clock-formatter.component.css'],
})
export class DigitalClockFormatterComponent implements OnInit {
  defaultFormatter: string = 'HH-mm-ss';
  @Input() formatter?: string = this.defaultFormatter;
  constructor() {}

  ngOnInit(): void {}
}
