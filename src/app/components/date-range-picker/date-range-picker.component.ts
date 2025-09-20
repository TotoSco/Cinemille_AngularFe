import {Component, inject, OnInit} from '@angular/core';
import {MAT_DATE_RANGE_SELECTION_STRATEGY, MatDatepickerModule} from '@angular/material/datepicker';
import {WeekRangeSelectionStrategy} from '../../utilies/week-range-selection.strategy';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DaysService} from '../../utilies/services/days.service';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-date-range-picker',
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: WeekRangeSelectionStrategy,
    },
    provideNativeDateAdapter(),
  ],
  templateUrl: './date-range-picker.component.html',
  styleUrl: './date-range-picker.component.css'
})
export class DateRangePickerComponent implements OnInit {
  todayDate = new Date();
  datePickForm!: FormGroup;

  daysService = inject(DaysService);

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.datePickForm = this.fb.group({
      dateRange: new FormGroup({
        start: new FormControl(),
        end: new FormControl(),
      })
    })
  }

  onSubmit() {
    if (this.datePickForm.value.dateRange.start !== null && this.datePickForm.value.dateRange.end !== null) {
      this.daysService.generateDaysFromRange(this.datePickForm.value.dateRange);
    } else {
      this.daysService.generateDefaultDays();
    }
  }
}
