import {ChangeDetectorRef, Component, inject, OnInit, signal, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {appStore} from '../../utilities/store/app.store';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {Schedule} from '../../utilities/models/schedule.interface';
import {MatInput} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-history',
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInput,
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  columns: string[] = ['movieTitle', 'theatre', 'fromDate', 'toDate'];

  appStore = inject(appStore);
  cdr = inject(ChangeDetectorRef);

  schedules = new MatTableDataSource<Schedule>();

  filters = {
    title: '',
    fromDate: '',
    toDate: ''
  };

  disabledFiltersInputs = signal<{ title: boolean, date: boolean }>({
    title: false,
    date: false
  })

  ngOnInit(): void {
    this.appStore.setSchedules().subscribe(() => {
      this.schedules = new MatTableDataSource<Schedule>(this.appStore.historySchedules());
      this.cdr.detectChanges();
      this.schedules.paginator = this.paginator;
      this.schedules.sort = this.sort;
      this.schedules.filterPredicate = function (data, filter: string): boolean {
        const searchTerms = filter ? JSON.parse(filter) : {};
        const titleFilter = (searchTerms.title || '').trim().toLowerCase();
        const fromFilter = (searchTerms.fromDate || '').trim();
        const toFilter = (searchTerms.toDate || '').trim();

        if (!titleFilter && !fromFilter && !toFilter) {
          return true;
        }

        const matchesTitle = titleFilter
          ? data.movieTitle.toLowerCase().startsWith(titleFilter)
          : false;

        const matchesFrom = fromFilter
          ? data.fromDate.toLowerCase().includes(fromFilter)
          : false;

        const matchesTo = toFilter
          ? data.toDate.toLowerCase().includes(toFilter)
          : false;
        return matchesTitle || (matchesFrom && matchesTo);
      }
    })
  }

  onFilterTitle(event: Event) {
    this.filters.title = (event.target as HTMLInputElement).value;
    if (this.filters.title.trim() !== '') {
      this.disabledFiltersInputs.set({title: false, date: true})
    } else {
      this.disabledFiltersInputs.set({title: false, date: false})
    }
    this.schedules.filter = JSON.stringify(this.filters);
  }

  onFilterFrom(event: Event) {
    this.filters.fromDate = (event.target as HTMLInputElement).value.toLowerCase();
    if (this.filters.fromDate.trim() !== '') {
      this.disabledFiltersInputs.set({title: true, date: false})
    } else {
      this.disabledFiltersInputs.set({title: false, date: false})
    }
    this.schedules.filter = JSON.stringify(this.filters);
  }

  onFilterTo(event: Event) {
    this.filters.toDate = (event.target as HTMLInputElement).value.toLowerCase();
    if (this.filters.toDate.trim() !== '') {
      this.disabledFiltersInputs.set({title: true, date: false})
    } else {
      this.disabledFiltersInputs.set({title: false, date: false})
    }
    this.schedules.filter = JSON.stringify(this.filters);
  }
}
