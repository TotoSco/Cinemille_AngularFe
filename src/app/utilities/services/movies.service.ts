import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Movie} from '../models/movie.interface';
import {Observable} from 'rxjs';
import {format} from 'date-fns';

@Injectable({
    providedIn: 'root',
  }
)
export class MoviesService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000';

  getMoviesByDate(date: Date): Observable<Movie[]> {
    const params = new HttpParams().set('date', format(date, 'yyyy-MM-dd'));
    return this.http.get<Movie[]>(`${this.apiUrl}/moviesSchedule`, { params });
  }
}
