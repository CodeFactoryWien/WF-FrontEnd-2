import { Component, OnInit } from '@angular/core';
import { TeacherService } from "../shared/teacher.service";

@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  constructor(public teacherService: TeacherService) { }
 submitted: boolean;
 formControls = this.teacherService.form.controls;
 showSuccessMessage: boolean;


  ngOnInit() {
  }


onSubmit(){
   this.submitted = true;
   if(this.teacherService.form.valid){
           if(this.teacherService.form.get("$key").value == null ){                    
             this.teacherService.insertTeacher(this.teacherService.form.value);
               this.showSuccessMessage =true;// we set the property to true

         } else {
                 this.teacherService.updateteacher(this.teacherService.form.value);
                 this.showSuccessMessage =true;// we set the property to true
       setTimeout(()=> this.showSuccessMessage=false,3000); // we used setTimeout here so after 3 second the showSuccessMessage value will be false
       this.submitted = false;
       this.teacherService.form.reset();// the form will be empty after new record created
         }
   }
 }
 
}
