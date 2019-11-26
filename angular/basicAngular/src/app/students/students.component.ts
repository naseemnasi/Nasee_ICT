import { Component, OnInit } from '@angular/core';
import { GetuserService } from '../getuser.service'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(public object: GetuserService) { }
  studentData;
  ngOnInit() {
    
    this.object.getUserService()
      .subscribe((students) => {
        this.studentData = students;
      })
    console.log(this.studentData)
  }

}
