import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task'
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = []

  constructor(private taskService: TaskService) { } // add taskService as provider

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks)) // becomes a promise
  }

  deleteTask(task: Task) {
    this.taskService.deleteTasks(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id))
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
  }
}
