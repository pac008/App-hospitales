import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    { titulo: 'Principal', 
      icono: 'mdi mdi-gauge',
      subMenu: [
      { titulo: 'Dashboard', url: '/dashboard' },
      { titulo: 'ProgressBar', url: '/dashboard/progress' },
      { titulo: 'Gráficas', url: '/dashboard/grafica1'  },
      { titulo: 'Promesas', url: '/dashboard/promesas'  },
      { titulo: 'Rxjs', url: '/dashboard/rxjs'  },
      ],
    }
  ]
  constructor() { }
}
