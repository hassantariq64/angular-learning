import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewstudentsComponent } from './viewstudents/viewstudents.component'

const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'view-students-data', component: ViewstudentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
