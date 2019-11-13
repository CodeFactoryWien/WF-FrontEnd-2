import { Component, OnInit } from '@angular/core';
import { CourseService } from "../shared/course.service";

@Component({
  selector: 'actionpage',
  templateUrl: './actionpage.component.html',
  styleUrls: ['./actionpage.component.scss']
})
export class ActionpageComponent implements OnInit {
courseArray =[];
 showDeletedMessage : boolean;
 searchText:string = "";

 constructor(public courseService: CourseService) { }

 ngOnInit() { 
         this.courseService.getCourse().subscribe(
                 (list) => {
                         this.courseArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });
    
}
onDelete($key){
     if(confirm("Are you sure you want to delete this course?")){
        this.courseService.deleteCourse($key);
       this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false , 3000)
     }
   }
   filterCondition(course){
     return course.title.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ;
   }

}