import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursepageComponent } from './coursepage/coursepage.component';
import { TeacherpageComponent } from './teacherpage/teacherpage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';


const routes: Routes = [{

        path:"",component: LandingpageComponent

},

{

        path: "teacherpage",component: TeacherpageComponent

}, 
{

        path: "contactpage",component: ContactpageComponent

}, 


{
		 path: "coursepage",component: CoursepageComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
