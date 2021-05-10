import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    { titulo: 'Principal', 
      class: 'mdi mdi-gauge',
      subMenu: [
      { titulo: 'Dashboard', url: '/' },
      { titulo: 'ProgressBar', url: '/dashboard/progress' },
      { titulo: 'Gráfica', url: '/dashboard/grafica1'  },
      ],
    }
  ]
  constructor() { }
}
