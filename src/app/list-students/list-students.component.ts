import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentsService } from '../students.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Students } from '../students';
import { PagingConfig } from '../paging-config.model';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit, OnDestroy {
  // students!: Students[];
  filteredStudents!: any[];
  subscription!: Subscription;
   currentPage:number  = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
    tableSize: number[] = [5, 10, 15, 20];
  students = new Array<Students>();

  pagingConfig: PagingConfig = {} as PagingConfig;

  constructor( private studentservice: StudentsService) {
      this.subscription = this.studentservice.getStudents().subscribe(
      (result:any)=>{
        //console.log(result)
        this.students  =  result.data;
      //  this.filteredStudents = this.students  =  result.data;
       this.pagingConfig.totalItems = result.length;
      }
    );
    this.pagingConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }

  }

  ngOnInit(): void {



  }

    filter(query: string) {
    this.filteredStudents = (query) ?
      this.students.filter((result:any) => result.first_name.toLowerCase().includes(query.toLowerCase())) :
      this.students;

  }

    onTableDataChange(event:any){
    this.pagingConfig.currentPage  = event;
    this.subscription;
  }
  onTableSizeChange(event:any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.subscription;
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
