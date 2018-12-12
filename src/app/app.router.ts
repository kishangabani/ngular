import { Todo } from './todos/todo';
import { Category } from './categories/category';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';


export const routes: Routes =[
    {        path:'Home', component: HomeComponent },
    {        path:'Todo',component:Todo  },
    {        path:'Category',component:Category  },
    {        path:'Course',component:CourseComponent  }

];

//export const routes: ModuleWithProviders=RouterModule.forRoot(router);