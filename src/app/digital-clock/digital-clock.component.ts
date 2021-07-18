import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css'],
})
export class DigitalClockComponent implements OnInit {
  private initDate: Date = new Date();
  public hours?: number;
  public minutes?: number;
  public seconds?: number;
  public ampm: string | null = null;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => this.renewDate(new Date()), 1000);
  }

  private renewDate(date: Date) {
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
  }
}
