import { Injectable, OnInit } from '@angular/core';
import { observable, Observable, Observer, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DigitalClockService {
  validHoursFormats = ['h', 'hh', 'H', 'HH'];
  validMinutesFormats = ['m', 'mm'];
  validSecondsFormats = ['s', 'ss'];
  validAmPmFormats = ['tt'];

  formatValidations = [
    this.validHoursFormats,
    this.validMinutesFormats,
    this.validSecondsFormats,
    this.validAmPmFormats,
  ];

  // defaultFormatter = 'HH:mm:ss:tt';
  formatter = 'HH:mm:ss:a';
  constructor() {}

  getFormat(): Observable<string> {
    return of(this.formatter);
  }

  // validateFormatInput(format: string): boolean {
  //   const [hours, minutes, seconds, ampm] = format.split(':');

  //   if (!hours) {
  //     return false;
  //   } else {
  //     return;
  //   }
  // }
}
