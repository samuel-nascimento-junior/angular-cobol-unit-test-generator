import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

    private items: MenuItem[];

    ngOnInit() {
      this.items = [{
        label: 'New',
        icon: 'pi pi-plus',
        items: [
          {label: 'New Book', icon: 'pi pi-align-left', routerLink: '/books/new'},
          {label: 'New Configuration', icon: 'pi pi-sliders-h'}
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        items: [
          {label: 'Edit Book', icon: 'pi pi-align-left'},       
          {label: 'Edit Configuration', icon: 'pi pi-sliders-h'}
        ]
    }];
  }
}