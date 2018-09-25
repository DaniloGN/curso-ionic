import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Task } from '../../app/models/Task';

/*
  Generated class for the TaskServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TaskServiceProvider Provider');
  }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>('http://localhost:3000/api/tasks');
  }
}
