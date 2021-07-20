import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  // tt === a, will need to map it, thats why there are 2 input formats
  defaultDisplayFormat = 'HH:mm:ss:tt';
  formatBehavior = new BehaviorSubject('HH:mm:ss:a');

  constructor() {}

  getFormat(): BehaviorSubject<string> {
    return this.formatBehavior;
  }

  getDefaultDisplayFormat(): string {
    return this.defaultDisplayFormat;
  }

  applyFormatChanges(event: string) {
    this.formatBehavior.next(event);
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
