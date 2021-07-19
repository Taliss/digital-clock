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
  formatter = 'HH:mm:ss:a';
  time = new Observable<Date>((observer: Observer<Date>) => {
    setInterval(() => {
      observer.next(new Date());
    }, 1000);
  });

  constructor() {}

  ngOnInit(): void {}
}
