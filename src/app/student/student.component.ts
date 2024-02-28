import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';        //import FormsModule
// import { StudentsDataService } from '../service/students-data.service';

import {Router} from '@angular/router'
import { student } from '../model/student.component';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  // students: student[] = [];
  // constructor(private router: Router) {}
  // constructor(private studentsDataService: StudentsDataService) {}

  constructor(
    private router: Router,
  ){}
  // ngOnInit() {
  //   this.studentsDataService.studentData$.subscribe(students => {
  //     this.students = students;
  //   });
  // }
  addStudent(){

    console.log("Add student");
    this.router.navigate(['/add-student'])
  }
  viewStudentsData(){

    console.log("view Students Data student");
    this.router.navigate(['/view-students-data']);
  }
}
