import { Component, Input, OnInit } from '@angular/core';
import { DigitalClockService } from '../digital-clock.service';

@Component({
  selector: 'app-digital-clock-formatter',
  templateUrl: './digital-clock-formatter.component.html',
  styleUrls: ['./digital-clock-formatter.component.css'],
})
export class DigitalClockFormatterComponent implements OnInit {
  defaultFormatter: string = 'HH:mm:ss';
  @Input() formatter?: string = this.defaultFormatter;
  constructor(private digitalClockService: DigitalClockService) {}

  ngOnInit(): void {}

  validateFormatter(event: any) {
    console.log(event);
  }
}
