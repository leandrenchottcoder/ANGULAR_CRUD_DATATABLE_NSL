import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Students } from './students';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor( private http: HttpClient) { }
  baseUrl: string = 'http://localhost/crudmysql/';

  getStudents() {
    return this.http.get<Students[]>(this.baseUrl+'view.php');
  }

  getSingleStudent(id:any) {
    return this.http.get<Students[]>(this.baseUrl+'view.php?id='+id);
  }

  deleteStudent(id:any) {
    console.log(id);
    return this.http.delete(this.baseUrl+'delete.php?id='+ id);
  }

  createStudent(student:any) {
    return this.http.post(this.baseUrl+'insert.php', student);
  }

  editStudent(student:any) {
      return this.http.put(this.baseUrl+'update.php', student);
    }
}
