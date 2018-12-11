import {Component} from '@angular/core';

@Component({
    selector:'courses',             //basics CSS    <courses> "courses" 
    template:'<h2>{{getTitle()}}</h2>'     //<div class ="courses"> ".courses" 
                            //<div id ="courses"> "#courses" 
})
export class CoursesComponent{
    title="List of courses";

    getTitle(){
        return this.title;
    }
}