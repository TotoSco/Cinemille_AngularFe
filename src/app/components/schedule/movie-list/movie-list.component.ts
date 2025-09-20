import {Component, input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Movie} from '../../../utilies/models/movie.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  imports: [
    CommonModule,
  ],
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies = input.required<Movie[]>();
}
