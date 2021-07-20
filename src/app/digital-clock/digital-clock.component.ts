import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { DigitalClockService } from '../digital-clock.service';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css'],
  providers: [DigitalClockService],
})
export class DigitalClockComponent implements OnInit {
  format!: string;
  // to clear Observable/BehaviorSubject subscription
  subscription!: Subscription;
  date!: Date;

  constructor(private digitalClockService: DigitalClockService) {}

  ngOnInit(): void {
    this.getActiveFormat();
    timer(0, 1000).subscribe(() => {
      this.date = new Date();
    });
  }

  ngOnDestroy(): void {
    // Not sure if this needs to be done in newest Angular version. Looks like a big topic.
    this.subscription.unsubscribe();
  }

  getActiveFormat(): void {
    this.subscription = this.digitalClockService
      .getFormat()
      .subscribe((format) => (this.format = format));
  }
}
