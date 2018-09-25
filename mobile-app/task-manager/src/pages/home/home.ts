import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { TaskServiceProvider } from '../../providers/task-service/task-service';
import { Task } from '../../app/models/Task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController,
    private TaskService: TaskServiceProvider) {

  }

  private _tasks: Task[];

  ionViewDidEnter(){
    let loading = this.loadingCtrl.create({
      content: 'Carregando tarefas..'
    });
    loading.present();
    this.TaskService.getTasks().subscribe(
      (tasks) =>{
        loading.dismiss();
        this._tasks = tasks;
      }
    );
  }
}
