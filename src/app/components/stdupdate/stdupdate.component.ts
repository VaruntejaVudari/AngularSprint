import { Component, OnInit } from '@angular/core';
import Students from 'src/app/entity/students';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-stdupdate',
  templateUrl: './stdupdate.component.html',
  styleUrls: ['./stdupdate.component.css'],
})
export class StdupdateComponent implements OnInit {
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
  update(students) {
    const observable = this.studentsService.updateStudent(students);
    observable.subscribe((response) => {
      console.log(response);
      this.students = response as Students;
      alert('the student data was edited');
    });
  }
  constructor(public studentsService: StudentsService) {}

  ngOnInit(): void {}
}
