import { Component, Input, OnInit } from '@angular/core';
import { DigitalClockService } from '../digital-clock.service';

@Component({
  selector: 'app-digital-clock-formatter',
  templateUrl: './digital-clock-formatter.component.html',
  styleUrls: ['./digital-clock-formatter.component.css'],
})
export class DigitalClockFormatterComponent implements OnInit {
  @Input() displayFormat?: string;
  constructor(private digitalClockService: DigitalClockService) {}

  ngOnInit(): void {
    this.displayFormat = this.digitalClockService.getDefaultDisplayFormat();
  }

  validateFormatter(event: any) {
    console.log(event);
  }
}
