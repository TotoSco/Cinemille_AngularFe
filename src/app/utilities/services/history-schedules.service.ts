import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, catchError, Observable, throwError} from 'rxjs';
import {Schedule} from '../models/schedule.interface';

@Injectable({
    providedIn: 'root',
  }
)
export class HistoryScheduleService {
  private http = inject(HttpClient);

  private apiUrl = '/api/v1';
  isLoading$ = new BehaviorSubject<boolean>(false);

  fetchHistorySchedules(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${this.apiUrl}/moviesScheduleHistory`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error("Error loading schedule history:", error.error.details);
        return throwError(() => error);
      })
    );
  }

}
