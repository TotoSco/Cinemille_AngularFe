import {Routes} from '@angular/router';
import {ScheduleComponent} from './components/schedule/schedule.component';
import {HistoryComponent} from './components/history/history.component';

export const routes: Routes = [
  {path: '', redirectTo: 'schedule', pathMatch: 'full'},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'history', component: HistoryComponent},
];
