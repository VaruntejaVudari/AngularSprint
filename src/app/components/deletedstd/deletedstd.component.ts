import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import Students from 'src/app/entity/students';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-deletedstd',
  templateUrl: './deletedstd.component.html',
  styleUrls: ['./deletedstd.component.css'],
})
export class DeletedstdComponent implements OnInit {
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
  studentses = [];
  delete(students, index) {
    const observable = this.studentsService.deletedStudent(students);
    observable.subscribe((response) => {
      console.log(response);
      this.studentses.splice(index, 1);
      alert('The Student Was Deleted Sucessfully');
    });
  }
  constructor(public studentsService: StudentsService) {}

  ngOnInit(): void {}
}
