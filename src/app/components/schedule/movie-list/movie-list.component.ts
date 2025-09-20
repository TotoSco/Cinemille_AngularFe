import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';


interface Movie {
  title: string;
  poster: string;
  description: string;
  duration: string;
  director: string;
  releaseYear: string;
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  imports: [
    CommonModule,
  ],
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  @Input() movies: Movie[] = [];
}
