import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DaysService} from '../../../utilies/services/days.service';
import {Day} from '../../../utilies/models/day.interface';

@Component({
  selector: 'app-day-selector',
  templateUrl: './day-selector.component.html',
  imports: [
    CommonModule,
  ],
  styleUrls: ['./day-selector.component.css']
})
export class DaySelectorComponent implements OnInit {
  daysService = inject(DaysService);

  days!: Day[];
  selectedDate: Date = new Date();

  @Output() dateSelected = new EventEmitter<Date>();

  ngOnInit(): void {
    this.daysService.days$.subscribe(days => {
      console.log(days);
      this.days = days;
    })
  }

  selectDay(day: Date) {
    this.selectedDate = day;
    this.dateSelected.emit(day);
  }
}
