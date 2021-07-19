import { Injectable } from '@angular/core';
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

  defaultDisplayFormat = 'HH:mm:ss:tt';
  defaultFormat = 'HH:mm:ss:a';
  format = this.defaultFormat;

  constructor() {}

  getFormat(): Observable<string> {
    return of(this.format);
  }

  getDefaultDisplayFormat() {
    return this.defaultDisplayFormat;
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
