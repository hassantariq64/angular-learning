import { Component, OnInit } from '@angular/core';
import { student } from '../model/student.component';
import { StudentsDataService } from '../service/students-data.service'

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  constructor(private studentsDataService: StudentsDataService) { }
  // @ViewChild('studentform') studentform: NgForm;
  student: student;

  ngOnInit(): void {
    this.student = new student();
  }

  studentData: any = [];
  onSubmit() {
    // console.log("formData:: ",this.studentform.value);
    // console.log("formData:: ",this.student);
    // this.studentData.push(this.student);
    // console.log("studentData:: ",this.studentData);

    this.studentsDataService.addStudent(this.student);

    this.student = new student()
    // console.log("array::: ",this.studentData);
    // console.log("just this.student::: ",this.student);
    debugger;
  }
}
