import {Movie} from '../models/movie.interface';
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {inject} from '@angular/core';
import {MoviesService} from '../services/movies.service';
import {withDevtools} from '@angular-architects/ngrx-toolkit';

interface State {
  selectedDate: Date | null;
  movies: Movie[];
}

const initialState: State = {
  selectedDate: null,
  movies: [],
};

export const appStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withDevtools('AppStore'),
  withMethods((store, moviesService = inject(MoviesService)) => ({
    setSelectedDate(date: Date) {
      patchState(store, {selectedDate: date});
    },
    setMoviesByDate(date: Date) {
      moviesService.getMoviesByDate(date).subscribe(movies => {
        patchState(store, {movies});
      });
    },
  }))
)
