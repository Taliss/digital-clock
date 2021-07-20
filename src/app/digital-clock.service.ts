import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DigitalClockService {
  private formatValidations = [
    ['h', 'hh', 'H', 'HH'],
    ['m', 'mm'],
    ['s', 'ss'],
    ['tt'],
  ];

  // tt === a, will need to map it, thats why there are 2 input formats
  defaultDisplayFormat = 'HH:mm:ss:tt';
  formatBehavior = new BehaviorSubject('HH:mm:ss:a');

  constructor() {}

  private pickValidFormattersFromInput(formatFromInput: string) {
    return formatFromInput
      .split(':')
      .slice(0, 4)
      .map((format) => format.trim())
      .reduce(
        (acc, curr, index) => {
          const formatIsValid = this.formatValidations[index].includes(curr);

          if (formatIsValid && !acc.invalidFormatWasFound) {
            acc.validFormatsToBeApplied.push(curr);
          } else {
            acc.invalidFormatWasFound = true;
          }

          return acc;
        },
        {
          invalidFormatWasFound: false as boolean,
          validFormatsToBeApplied: [] as string[],
        }
      );
  }

  private mapAmPmValue(formattersToBeApplied: string): string {
    return formattersToBeApplied.replace('tt', 'a');
  }

  getFormat(): BehaviorSubject<string> {
    return this.formatBehavior;
  }

  getDefaultDisplayFormat(): string {
    return this.defaultDisplayFormat;
  }

  applyFormatChanges(event: string): void {
    const newFormatters =
      this.pickValidFormattersFromInput(event).validFormatsToBeApplied;

    if (newFormatters.length) {
      const formatters = this.mapAmPmValue(newFormatters.join(':'));
      this.formatBehavior.next(formatters);
    }
  }
}
