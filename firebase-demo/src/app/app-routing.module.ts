import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursepageComponent } from './coursepage/coursepage.component';
import { TeacherpageComponent } from './teacherpage/teacherpage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [{

        path:"",component: LandingpageComponent

},

{

        path: "teacherpage",component: TeacherpageComponent

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
