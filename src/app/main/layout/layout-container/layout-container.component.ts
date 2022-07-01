import { Component, HostBinding, OnInit, ViewChild, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss']
})
export class LayoutContainerComponent implements OnInit {
  opened: boolean = true;
  profile: any;
  @HostBinding('class') className = '';
  isDarkMode!: boolean;
  toggleControl = new FormControl(false);

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleDrawer() {
    this.opened = !this.opened;
  }

  darkMode(darkMode: boolean) {
    this.isDarkMode = darkMode
    const darkClassName = 'dark-mode';
    this.className = darkMode ? darkClassName : '';
  }
}
