import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Schedule} from '../models/schedule.interface';

@Injectable({
    providedIn: 'root',
  }
)
export class HistoryScheduleService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000';
  isLoading$ = new BehaviorSubject<boolean>(false);

  fetchHistorySchedules(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${this.apiUrl}/movies/schedule/history`);
  }

}
