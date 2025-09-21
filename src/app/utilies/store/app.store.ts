import {Movie} from '../models/movie.interface';
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {inject} from '@angular/core';
import {MoviesService} from '../services/movies.service';
import {withDevtools} from '@angular-architects/ngrx-toolkit';
import {Schedule} from '../models/schedule.interface';
import {HistoryScheduleService} from '../services/history-schedules.service';
import {tap} from 'rxjs';

interface State {
  selectedDate: Date | null;
  movies: Movie[];
  historySchedules: Schedule[];
}

const initialState: State = {
  selectedDate: null,
  movies: [],
  historySchedules: []
};

export const appStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withDevtools('AppStore'),
  withMethods((store,
               moviesService = inject(MoviesService),
               historyService = inject(HistoryScheduleService)) => ({
    setSelectedDate(date: Date) {
      patchState(store, {selectedDate: date});
    },
    setMoviesByDate(date: Date) {
      moviesService.getMoviesByDate(date).subscribe(movies => {
        patchState(store, {movies: movies});
      });
    },
    setSchedules() {
      historyService.isLoading$.next(true);
      return historyService.fetchHistorySchedules().pipe(
        tap(schedules => {
          patchState(store, { historySchedules: schedules });
          historyService.isLoading$.next(false);
        })
      );
    }

  }))
)
