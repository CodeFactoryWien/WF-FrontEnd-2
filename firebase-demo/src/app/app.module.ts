import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { ReactiveFormsModule ,FormsModule} from "@angular/forms" ;
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';


import { environment } from "../environments/environment";


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CoursepageComponent } from './coursepage/coursepage.component';
import { TeacherpageComponent } from './teacherpage/teacherpage.component';
import { TeacherService } from "./shared/teacher.service";
import { CourseService } from "./shared/course.service";
import { JoinbuttonComponent } from './joinbutton/joinbutton.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    TeacherComponent,
    TeacherListComponent,
    CourseListComponent,
    LandingpageComponent,
    NavbarComponent,
    FooterComponent,
    CoursepageComponent,
    TeacherpageComponent,
    JoinbuttonComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppMaterialModule,
     AngularFireModule.initializeApp(environment.firebaseConfig), // we called initializeApp function to provide connection details
     AngularFireDatabaseModule, // we will import the classes here too
    BrowserAnimationsModule
  ],
  providers: [TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
