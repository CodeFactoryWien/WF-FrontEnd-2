import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursepageComponent } from './coursepage/coursepage.component';
import { TeacherpageComponent } from './teacherpage/teacherpage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { ActionpageComponent } from './actionpage/actionpage.component';
import { JumppageComponent } from './jumppage/jumppage.component';
import { StrategypageComponent } from './strategypage/strategypage.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [{

        path:"",component: LandingpageComponent

},

{

        path: "teacher",component: TeacherpageComponent

}, 
{

        path: "contact",component: ContactpageComponent

}, 


{
		 path: "course",component: CoursepageComponent

},
{
		 path: "action",component: ActionpageComponent

},
{
		 path: "jump",component: JumppageComponent

},
{
		 path: "strategy",component: StrategypageComponent

},
{
		 path: "testimonials",component: TestimonialsComponent

} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
