import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'node-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {

  constructor() { }

  @Input() page: any;

  ngOnInit(): void {
  }

}
