import {Component, inject, signal} from '@angular/core';
import {DaySelectorComponent} from './day-selector/day-selector.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {DateRangePickerComponent} from '../date-range-picker/date-range-picker.component';
import {Movie} from '../../utilies/models/movie.interface';
import {MoviesService} from '../../utilies/services/movies.service';

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
  moviesService = inject(MoviesService);

  moviesList = signal<Movie[]>([]);

  onDateSelected(date: Date) {
    console.log('Data selezionata:', date);
    this.moviesService.getMoviesByDate(date).subscribe(movies => {
      console.log(movies);
      this.moviesList.set(movies);
    });
  }
}
