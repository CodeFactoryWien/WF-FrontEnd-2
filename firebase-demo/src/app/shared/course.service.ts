import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(public firebase: AngularFireDatabase) { }
         courseList: AngularFireList<any>;

     form = new FormGroup({
     $key: new FormControl(null),
     title: new FormControl('', Validators.required),
     name: new FormControl('', Validators.required),
     teacher: new FormControl('', Validators.required),   
     points: new FormControl('', [Validators.required, Validators.minLength(2)]),
     goals: new FormControl ('', Validators.required)
         });

         getCourse(){
                 this.courseList = this.firebase.list('course');
                 return this.courseList.snapshotChanges();
         }
         insertCourse(course){
                 this.courseList.push({
                         title: course.title,
                         name: course.name,
                         teacher: course.teacher,
                         points: course.points,
                         goals: course.goals
                  });
         }
         populateForm(course){
            this.form.setValue(course);
          }
          updateCourse(course){
            this.courseList.update(course.$key,{
                         title: course.title,
                         name: course.name,
                         teacher: course.teacher,
                         points: course.points,
                         goals: course.goals
                });
             } 
             
           deleteCourse($key: string){
          this.courseList.remove($key);
          }

        
} 

