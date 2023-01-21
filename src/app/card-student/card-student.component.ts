import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentsService } from '../students.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Students } from '../students';

@Component({
  selector: 'app-card-student',
  templateUrl: './card-student.component.html',
  styleUrls: ['./card-student.component.css']
})
export class CardStudentComponent {
  imgUrl = "../../assets/profile.jpg";
students!: Students[];
  filteredStudents!: any[];
  subscription!: Subscription;

  constructor( private studentservice: StudentsService) {
      this.subscription = this.studentservice.getStudents().subscribe(
      (result:any)=>{
        //console.log(result)
       this.filteredStudents = this.students  =  result.data;
      }
    )
  }

  ngOnInit(): void {



  }

    filter(query: string) {
    this.filteredStudents = (query) ?
      this.students.filter((result:any) => result.first_name.toLowerCase().includes(query.toLowerCase())) :
      this.students;

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteStudent(student:any){
   // console.log(id);
   if(confirm('Voulez vous supprimer cet enregistrement ?')){
     this.studentservice.deleteStudent(student.id).subscribe(data=>{
      this.students = this.students.filter((u: any) => u !== student);
    })
   }
  }

}
