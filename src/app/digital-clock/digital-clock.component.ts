import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs/internal/types';
import { DigitalClockService } from '../digital-clock.service';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css'],
})
export class DigitalClockComponent implements OnInit {
  // Also wanted to directly pipe format, but not how to pipe argument
  format?: string;
  time = new Observable<Date>((observer: Observer<Date>) => {
    setInterval(() => {
      observer.next(new Date());
    }, 1000);
  });

  constructor(private digitalClockService: DigitalClockService) {}

  ngOnInit(): void {
    this.getActiveFormat();
  }

  getActiveFormat(): void {
    this.digitalClockService.getFormat().subscribe((format) => {
      this.format = format;
    });
  }
}
