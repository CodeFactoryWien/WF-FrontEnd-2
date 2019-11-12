import { Component, OnInit } from '@angular/core';
import { CourseService } from "../shared/course.service";
import { TeacherService } from "../shared/teacher.service";


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(public courseService: CourseService, public teacherService: TeacherService) { }
 submitted: boolean;
 formControls = this.courseService.form.controls;
 showSuccessMessage: boolean;
 teacherArray=[];
 showDeletedMessage : boolean;
 searchText:string = "";

 ngOnInit() {
         this.teacherService.getteacher().subscribe(
                 (list) => {
                         this.teacherArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });

 }

 onSubmit(){
   this.submitted = true;
   if(this.courseService.form.valid){
           if(this.courseService.form.get("$key").value == null ){                    
             this.courseService.insertCourse(this.courseService.form.value);
               this.showSuccessMessage =true;// we set the property to true

         } else {
                 this.courseService.updateCourse(this.courseService.form.value);
                 this.showSuccessMessage =true;// we set the property to true
       setTimeout(()=> this.showSuccessMessage=false,3000); // we used setTimeout here so after 3 second the showSuccessMessage value will be false
       this.submitted = false;
       this.courseService.form.reset();// the form will be empty after new record created
         }
   }
 }
 onDelete($key){
     if(confirm("Are you sure you want to delete this teacher?")){
        this.teacherService.deleteteacher($key);
       this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false , 3000)
     }
   }
   filterCondition(teacher){
     return teacher.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ;
   }

}
