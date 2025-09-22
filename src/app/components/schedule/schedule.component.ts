import {Component, inject} from '@angular/core';
import {DaySelectorComponent} from './day-selector/day-selector.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {DateRangePickerComponent} from '../date-range-picker/date-range-picker.component';
import {appStore} from '../../utilities/store/app.store';

@Component({
  selector: 'app-schedule',
  imports: [
    DaySelectorComponent,
    MovieListComponent,
    DateRangePickerComponent,
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {
  appStore = inject(appStore);

  moviesList = this.appStore.movies;

  onDateSelected(date: Date) {
    this.appStore.setMoviesByDate(date);
  }
}
