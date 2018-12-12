import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component'; // Automatic update courses component
import { CoursesService } from './courses.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
    //MDBBootstrapModule  
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
