import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(public firebase: AngularFireDatabase) { }
  teacherList: AngularFireList<any>;
  form = new FormGroup({
     $key: new FormControl(null),
     fullName: new FormControl('', Validators.required),
     nickName: new FormControl('', Validators.required),
     favgames: new FormControl('', Validators.required),   
     image: new FormControl('', Validators.required)
         });

  getteacher(){
                 this.teacherList = this.firebase.list('teacher');
                 return this.teacherList.snapshotChanges();
         }
         insertTeacher(teacher){
                 this.teacherList.push({
                         fullName: teacher.fullName,
                         nickName: teacher.nickName,
                         favgames: teacher.favgames,
                         image: teacher.image
                                           });
         }
         populateForm(teacher){
            this.form.setValue(teacher);
          }
          updateteacher(teacher){
            this.teacherList.update(teacher.$key,{
                         fullName: teacher.fullName,
                         nickName: teacher.nickName,
                         favgames: teacher.favgames,
                         image: teacher.image
                });
             } 
             
           deleteteacher($key: string){
          this.teacherList.remove($key);
          }
} 

