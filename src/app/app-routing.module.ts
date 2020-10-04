import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentListComponent } from './presentation/pages/student-list/student-list.component';


const routes: Routes = [
  {
    path: 'alunos',
    component: StudentListComponent
  },
  {
    path: '',
    component: StudentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
