import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', 
    pathMatch: "full",
    // loadComponent : () => { // avant angular 21 , sans exportn default sur le composant
    //   return import('./features/home/home').then(m => m.Home)
    // }
    loadComponent: () => import ('./features/home/home') // a besoin de rajouter export default 
  },
    {path: 'todos', 
    loadComponent : () => import('./features/todos/todos') 
  }
];
