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
  time = new Observable<any>((observer: Observer<any>) => {
    setInterval(() => {
      observer.next(new Date().toString());
    }, 1000);
  });

  constructor() {}

  ngOnInit(): void {}
}
