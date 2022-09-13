import { Component, OnInit } from '@angular/core';
import Students from 'src/app/entity/students';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-studentsdata',
  templateUrl: './studentsdata.component.html',
  styleUrls: ['./studentsdata.component.css'],
})
export class StudentsdataComponent implements OnInit {
  students: Students = new Students();
  studentsdata: Students[] = [];
  get() {
    const promise = this.studentsService.getStudents();
    promise.subscribe(
      (response) => {
        console.log(response);
        this.studentsdata = response as Students[];
      },
      function (error) {
        console.log(error);
        alert('There Is No Student Registration');
      }
    );
  }

  constructor(public studentsService: StudentsService) {}

  ngOnInit(): void {}
}
