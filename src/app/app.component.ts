import {Component, HostListener, OnInit, signal} from '@angular/core';
import {SideNavComponent} from './components/side-nav/side-nav.component';
import {MainComponent} from './components/main/main.component';

@Component({
  selector: 'app-root',
  imports: [SideNavComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
      this.isSideNavCollapsed.set(this.screenWidth() < 768);
  }
  title = 'CineMille';
  isSideNavCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isSideNavCollapsed.set(true);
    }
  }

  changeIsSideNavCollapsed(isSideNavCollapsed: boolean): void {
    this.isSideNavCollapsed.set(isSideNavCollapsed);
  }
}
