import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { student } from '../model/student.component';

@Injectable({
  providedIn: 'root'
})
export class StudentsDataService {
  private studentDataSubject = new BehaviorSubject<student[]>([]);
  studentData$ = this.studentDataSubject.asObservable();

  studentArray:any[] = [];

  addStudent(student: student) {
   // this.studentDataSubject.next([...this.studentDataSubject.value, student]);
    console.log("this value:: ",this.studentDataSubject);

    this.studentArray.push(student);
    debugger;
  }
}