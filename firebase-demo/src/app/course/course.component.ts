import { Component, OnInit } from '@angular/core';
import { CourseService } from "../shared/course.service";


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(public courseService: CourseService) { }
 submitted: boolean;
 formControls = this.courseService.form.controls;
 showSuccessMessage: boolean;

 ngOnInit() {

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
 
}