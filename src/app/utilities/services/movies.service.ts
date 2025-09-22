import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Movie} from '../models/movie.interface';
import {catchError, Observable, throwError} from 'rxjs';
import {format} from 'date-fns';

@Injectable({
    providedIn: 'root',
  }
)
export class MoviesService {
  private http = inject(HttpClient);

  private apiUrl = '/api/v1';

  getMoviesByDate(date: Date): Observable<Movie[]> {
    const params = new HttpParams().set('date', format(date, 'yyyy-MM-ddd'));
    return this.http.get<Movie[]>(`${this.apiUrl}/moviesSchedule`, { params }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error("Error loading movies:", error.error.details);
        return throwError(() => error);
      })
    );
  }
}
