import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './add-students/add-students.component';
import { CardStudentComponent } from './card-student/card-student.component';
import { DetailStudentsComponent } from './detail-students/detail-students.component';
import { EditStudentsComponent } from './edit-students/edit-students.component';
import { HomeComponent } from './home/home.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { RechercheStudentComponent } from './recherche-student/recherche-student.component';

export const routes: Routes = [

    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'card-list', component: CardStudentComponent },
    { path: 'add-student', component: AddStudentsComponent },
    { path: 'list-students', component: ListStudentsComponent },
    { path: 'recherche-student', component: RechercheStudentComponent },
    { path: 'details/:id', component: DetailStudentsComponent},
    { path: 'edit/:id', component: EditStudentsComponent },
    { path: '**', redirectTo: '', pathMatch:'full' },

];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
  })

  export class AppRoutingModule { }

