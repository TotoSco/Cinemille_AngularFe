import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {addDays, format} from 'date-fns';
import {eachDayOfInterval} from 'date-fns/eachDayOfInterval';
import {DateRange} from '@angular/material/datepicker';
import {Day} from '../models/day.interface';

@Injectable({providedIn: 'root'})
export class DaysService {
  private daysSubject = new BehaviorSubject<Day[]>([]);
  days$ = this.daysSubject.asObservable();

  constructor() {
    this.generateDefaultDays();
  }

  generateDefaultDays() {
    const days: Day[] = [];
    for (let i = 0; i < 7; i++) {
      const date = addDays(new Date(), i);
      days.push({
        label: format(date, 'EEE dd/MM'),
        date,
      });
    }
    this.daysSubject.next(days);
  }

  generateDaysFromRange(range: DateRange<Date>) {
    if (range.start && range.end) {
      const days = eachDayOfInterval({start: range.start, end: range.end}).map(
        (date: Date) => ({
          label: format(date, 'EEE dd/MM'),
          date,
        })
      );
      this.daysSubject.next(days);
    }
  }
}
