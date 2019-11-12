import { Component, OnInit } from '@angular/core';
import { TeacherService } from "../shared/teacher.service";

@Component({
  selector: 'teacher-name',
  templateUrl: './teacher-name.component.html',
  styleUrls: ['./teacher-name.component.scss']
})
export class TeacherNameComponent implements OnInit {

teacherArray=[];
 showDeletedMessage : boolean;
 searchText:string = "";




 constructor(public teacherService: TeacherService) { }

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