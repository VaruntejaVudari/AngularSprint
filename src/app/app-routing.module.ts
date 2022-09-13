import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletedstdComponent } from './components/deletedstd/deletedstd.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { StdupdateComponent } from './components/stdupdate/stdupdate.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentsdataComponent } from './components/studentsdata/studentsdata.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'studentsdata', component: StudentsdataComponent },
  { path: 'deletedstd', component: DeletedstdComponent },
  { path: 'stdupdate', component: StdupdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
