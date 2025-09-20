import {Component, EventEmitter, inject, OnInit, Output, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DaysService} from '../../../utilies/services/days.service';
import {Day} from '../../../utilies/models/day.interface';
import {appStore} from '../../../utilies/store/app.store';

@Component({
  selector: 'app-day-selector',
  templateUrl: './day-selector.component.html',
  imports: [
    CommonModule,
  ],
  styleUrls: ['./day-selector.component.css']
})
export class DaySelectorComponent implements OnInit {
  appStore = inject(appStore);
  daysService = inject(DaysService);

  days!: Day[];
  selectedDate = this.appStore.selectedDate;

  @Output() dateSelected = new EventEmitter<Date>();

  ngOnInit(): void {
    this.daysService.days$.subscribe(days => {
      this.days = days;
    })
  }

  selectDay(day: Date) {
    this.appStore.setSelectedDate(day);
    this.dateSelected.emit(day);
  }
}
