import { Component } from '@angular/core';
import { StudentsDataService } from '../service/students-data.service';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent {
 dt: any;
 item: any;
 studentArray : any;
  constructor(private data:StudentsDataService){
    this.studentArray = data.studentArray;
  }

  // showData(){
  //   console.log("data:: ",StudentsDataService);
  //   debugger;
  // }
}
