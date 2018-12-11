import { Todo } from './todos/todo';
import { Category } from './categories/category';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';


export const router: Routes =[
    {        path:'',redirectTo:'',pathMatch:'full'    },
    {        path:'Todo',component:Todo  },
    {        path:'Category',component:Category  }

];


export const routes: ModuleWithProviders=RouterModule.forRoot(router);