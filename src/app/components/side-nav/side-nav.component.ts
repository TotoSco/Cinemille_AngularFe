import {Component, Input, input, output} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  imports: [
    MatIcon,
    RouterModule,
    NgClass
  ],
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  @Input() title!: string;
  isSideNavCollapsed = input.required<boolean>();
  changeIsSideNavCollapsed = output<boolean>();
  items = [
    {
      routeLink: 'schedule',
      icon: 'schedule',
      label: 'Schedule'
    },
    {
      routeLink: 'history',
      icon: 'history',
      label: 'History'
    }
  ]

  toggleCollapse(): void {
    this.changeIsSideNavCollapsed.emit(!this.isSideNavCollapsed());
  }

  closeSidenav(): void {
    this.changeIsSideNavCollapsed.emit(true);
  }
}
