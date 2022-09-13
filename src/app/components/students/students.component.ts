import { Component, OnInit } from '@angular/core';
import Students from 'src/app/entity/students';
import { StudentsService } from 'src/app/students.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  title = 'Fill the student Details';
  students: Students = new Students();

  save() {
    const observable = this.studentsService.createStudents(this.students);
    observable.subscribe(
      (response: any) => {
        console.log(response);
      },
      function (error) {
        console.log(error);
        alert('somethimg Went Wrong Please Try Again');
      }
    );
  }
  constructor(public studentsService: StudentsService) {}

  ngOnInit(): void {}
}
