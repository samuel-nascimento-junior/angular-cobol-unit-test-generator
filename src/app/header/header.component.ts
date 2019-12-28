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
          {label: 'Book', icon: 'pi pi-align-left', routerLink: '/books/new'},
          {label: 'Type', icon: 'pi pi-sliders-h'},
          {label: 'Sequencial File', icon: 'pi pi-file-o'}
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        items: [
          {label: 'Book', icon: 'pi pi-align-left'},       
          {label: 'Type', icon: 'pi pi-sliders-h'}
        ]
    },
    { 
      label: 'Program Call',
      icon: 'pi pi-play'
    },
    { 
      label: 'Unity Test',
      icon: 'pi pi-undo'
    }];
  }
}