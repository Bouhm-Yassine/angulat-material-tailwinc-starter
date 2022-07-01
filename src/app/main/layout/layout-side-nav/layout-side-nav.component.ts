import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-side-nav',
  templateUrl: './layout-side-nav.component.html',
  styleUrls: ['./layout-side-nav.component.scss']
})
export class LayoutSideNavComponent implements OnInit {

  showSubJob: boolean = false;
  showSubAdmin: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
